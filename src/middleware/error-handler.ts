import type { Request, Response } from 'express';
import { logger } from '@utils/logger';

interface CustomError extends Error {
	status?: number;
	stack?: string;
}

type ErrorHandlerDeps = {
	isProduction: boolean;
};

export const createErrorHandler = ({ isProduction }: ErrorHandlerDeps) => {
	return (err: CustomError | Error, _req: Request, res: Response) => {
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
		logger.error('Error:', err.message);

		if (!isProduction) {
			logger.error('Stack:', err.stack);
		}

		// Send the error response
		res.status(statusCode).json(errorResponse);
	};
};
