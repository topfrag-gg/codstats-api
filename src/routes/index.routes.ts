import type { Application } from 'express';
import config from 'config';
import { Router } from 'express';
import { createHealthRouter } from '@src/api/health/routes';

export const setupRoutes = (app: Application): void => {
	const router = Router();

	// API version prefix
	const API_PREFIX = '/api/v1';

	// Creating routers
	const healthRouter = createHealthRouter();

	// Root routes
	router.get('/', (_req, res) => {
		res.status(200).json({
			service: config.get('name'),
			version: config.get('version'),
			links: {
				documentation: 'https://github.com/topfrag-gg/codstats-api#readme',
			},
		});
	});
	router.use('/health', healthRouter);

	// Health routes
	app.use(`${API_PREFIX}`, router);
};
