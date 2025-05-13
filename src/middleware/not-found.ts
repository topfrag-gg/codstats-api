/** @format */

import console from 'node:console';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

type NotFoundHandlerDeps = {
	isProduction: boolean;
};

type NotFoundHandler = (
	req: Request,
	res: Response,
	next: NextFunction,
) => void;

/**
 * This middleware handles 404 Not Found errors for the application.
 * @param {boolean} isProduction - Indicates if the application is running in production mode.
 * @returns {NotFoundHandler} - A middleware function that handles 404 errors.
 */
export const createNotFoundHandler = ({
	isProduction,
}: NotFoundHandlerDeps): NotFoundHandler => {
	return (req: Request, res: Response, next: NextFunction): void => {
		// Prepare error message
		const errorMessage = `The requested resource '${req.originalUrl}' was not found`;

		// Log the 404 warning
		console.warn(`[404] ${req.method}: ${req.originalUrl}`);

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
