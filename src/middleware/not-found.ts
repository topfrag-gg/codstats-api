import type { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { logger } from '@utils/logger';

type NotFoundHandlerDeps = {
	isProduction: boolean;
};

export const createNotFoundHandler = ({
	isProduction,
}: NotFoundHandlerDeps) => {
	return (req: Request, res: Response, next: NextFunction): void => {
		// Prepare error message
		const errorMessage = `The requested resource '${req.originalUrl}' was not found`;

		// Log the 404 warning
		logger.warn(`[404] ${req.method}: ${req.originalUrl}`);

		// Send the 404 response
		res.status(404).json({
			message: isProduction ? 'Resource not found' : errorMessage,
			statusCode: 404,
			method: req.method,
			timestamp: new Date().toISOString(),
		});

		// Pass a 404 error to the next error-handling middleware
		next(createError(404, errorMessage));
	};
};
