/** @format */

// Import modules
import { NextFunction, Request, Response } from 'express';

export const globalRedirect = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const API_PREFIX = `/api/v1`;

	// Check if the request path does not start with '/api'
	if (!req.path.startsWith('/api')) {
		// Extract the query string from the request URL
		const query = req.url.slice(req.path.length);

		// Redirect to the API path
		return res.redirect(301, API_PREFIX + req.path + query);
	}

	// Call the next middleware
	next();
};
