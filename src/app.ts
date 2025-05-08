/** @format */

import compression from 'compression';
import config from 'config';
import cors from 'cors';
import express, { Express, Request } from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'node:path';
import process from 'node:process';
import favicon from 'serve-favicon';
import { corsOptions } from './libs/cors';
import { expressSettings, setupBodyParsers } from './libs/express';
import { helmetOptions } from './libs/helmet';
import { globalRedirect } from './middleware/api-redirect';
import { createErrorHandler } from './middleware/error-handler';
import { createNotFoundHandler } from './middleware/not-found';
import { setupRoutes } from './routes/index.routes';

export const createApp = () => {
	// Create the Express application instance
	const app: Express = express();
	// Determine if the environment is production
	const isProduction = config.get('env') === 'production';
	// Create the global not
	const notFoundHandler = createNotFoundHandler({ isProduction });
	//Create the global error handler
	const errorHandler = createErrorHandler({ isProduction });

	// Setup Express settings
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
		windowMs: 15 * 60 * 1000, // 15 minute window
		max: 10, // Limit each IP to 10 requests per window
		standardHeaders: 'draft-8', // Use standardized rate limit headers
		legacyHeaders: false, // Disable legacy rate limit headers
	});
	app.use(limiter);

	// Setup Express body parsing middleware
	setupBodyParsers(app);

	// Log HTTP requests
	app.use(morgan('common'));

	// Serve favicon
	app.use(favicon(path.join(process.cwd(), 'public', 'favicon.ico')));

	// Serve static files
	app.use(express.static(path.join(process.cwd(), 'public')));

	// Redirect middleware: Handle global redirects to non-API prefixed routes
	app.use(globalRedirect);

	// Setup routes
	setupRoutes(app);

	// 404 middleware: Handle requests to unknown routes
	app.use(notFoundHandler);

	// Global error handling middleware
	app.use(errorHandler);

	// Return configured Express application instance
	return app;
};
