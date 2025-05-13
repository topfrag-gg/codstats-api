/** @format */

import console from 'node:console';
import { Request, Response } from 'express';

interface CustomError extends Error {
	status?: number;
	stack?: string;
}

type ErrorHandlerDeps = {
	isProduction: boolean;
};

type ErrorHandler = (
	err: CustomError | Error,
	_req: Request,
	res: Response,
) => void;

/**
 * This middleware handles errors that occur during the request lifecycle.
 * @param {CustomError | Error} err - The error object
 * @param {boolean} err.isProduction - Indicates if the application is running in production mode.
 * @returns { void } - This function does not return any value.
 */
export const createErrorHandler = ({
	isProduction,
}: ErrorHandlerDeps): ErrorHandler => {
	return (err: CustomError | Error, _req: Request, res: Response): void => {
		// Ensure the error is an instance of Error
		if (!(err instanceof Error)) {
			err = new Error('An unexpected error occurred');
		}

		// Determine the status code
		const statusCode = (err as CustomError)?.status || 500;

		// Prepare the error response
		const errorResponse = {
			message: err.message || 'Internal Server Error',
			statusCode,
			...(isProduction ? {} : { stack: err.stack }),
			timestamp: new Date().toISOString(),
		};

		//Log the error
		console.error('Error:', err.message);

		if (!isProduction) {
			console.error('Stack:', err.stack);
		}

		// Send the error response
		res.status(statusCode).json(errorResponse);
	};
};
