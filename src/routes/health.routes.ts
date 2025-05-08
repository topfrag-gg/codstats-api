/** @format */

// Import modules
import { Request, Response, Router } from 'express';

export const createHealthRouter = (): Router => {
	// Initializing router
	const router = Router();
	// Extract health controller methods

	// Routes
	router.get('/liveness', (_req: Request, res: Response) => {
		res.status(200).json({
			status: 'success',
			message: 'API is running',
			timestamp: new Date().toISOString(),
		});
	});

	// Return health router
	return router;
};
