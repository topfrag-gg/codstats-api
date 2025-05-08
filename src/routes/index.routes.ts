/** @format */

import { Application, Router } from 'express';
import { createHealthRouter } from './health.routes';

export const setupRoutes = (app: Application): void => {
	const router = Router();

	// API version prefix
	const API_PREFIX = '/api/v1';

	// Creating routers
	const healthRouter = createHealthRouter();

	// Root routes
	router.get('/', (_req, res) => {
		res.send('Hello WOrld');
	});
	router.use('/health', healthRouter);

	// Health routes
	app.use(`${API_PREFIX}`, router);
};
