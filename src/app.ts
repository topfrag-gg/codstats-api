import path from 'node:path';
import process from 'node:process';
import type { Express, Request } from 'express';
import compression from 'compression';
import config from 'config';
import cors from 'cors';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { xss } from 'express-xss-sanitizer';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import { corsOptions } from '@libs/cors';
import { expressSettings, setupBodyParsers } from '@libs/express';
import { helmetOptions } from '@libs/helmet';
import { globalRedirect } from '@middleware/api-redirect';
import { createErrorHandler } from '@middleware/error-handler';
import { httpLogger } from '@middleware/http-logger';
import { createNotFoundHandler } from '@middleware/not-found';
import { setupRoutes } from '@routes/index.routes';

export const createApp = () => {
	// Create the Express application instance
	const app: Express = express();

	// Create global 404 and error handlers
	const isProduction = config.get('env') === 'production';
	const notFoundHandler = createNotFoundHandler({ isProduction });
	const errorHandler = createErrorHandler({ isProduction });

	// Apply Express settings
	Object.entries(expressSettings).forEach(([key, value]) => {
		app.set(key, value);
	});

	// Initialization and security middleware
	app.use(cors<Request>(corsOptions));
	app.use(helmet(helmetOptions()));
	app.use(
		compression({
			threshold: '1kb',
			filter: (req) => !req.path.includes('health'),
		}),
	);

	// General rate limiter
	const limiter = rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 10,
		standardHeaders: 'draft-8',
		legacyHeaders: false,
		// Allow Consul health checks through without rate limiting because:
		// 1. They're essential for cluster orchestration
		// 2. Consul agents authenticate via TLS client certs
		// 3. Health endpoint performs no expensive operations
		skip: (req) => {
			return (
					req.path === '/api/v1/health/ready'
						&& !!req.get('user-agent')?.includes('Consul Health Check')
				) ?
					true
				:	false;
		},
	});
	app.use(limiter);

	// Body parsers
	setupBodyParsers(app);

	// HTTP request logging
	app.use(httpLogger);

	// Favicon and static assets
	app.use(favicon(path.join(process.cwd(), 'public', 'favicon.ico')));
	app.use(express.static(path.join(process.cwd(), 'public')));

	// Input sanitization
	app.use(xss());
	app.use(hpp());

	// Global redirect middleware
	app.use(globalRedirect);

	// App routes
	setupRoutes(app);

	// 404 and error handling
	app.use(notFoundHandler);
	app.use(errorHandler);

	return app;
};
