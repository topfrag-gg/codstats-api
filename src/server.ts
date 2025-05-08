/** @format */

import { createApp } from '@/src/app';
import config from 'config';
import console from 'node:console';
import { exit } from 'node:process';

export const startServer = (): void => {
	// Load the server configuration variables
	const protocol: string = config.get('protocol');
	const host: string = process.env.HOST ?? 'localhost';
	const port: number = Number(process.env.PORT) || 3000;
	const env: string = process.env.NODE_ENV || 'development';

	const app = createApp();
	const server = app.listen(port, host);

	server.on('listening', () => {
		console.log(`Starting server in ${env} mode`);
		console.log(`Server is listening at: ${protocol}://${host}:${port}`);

		if (env === 'development') console.info('Press CTRL+C to stop the server');
	});

	server.on('error', (err: NodeJS.ErrnoException) => {
		console.error('Server encountered an error:', err);

		if (err.code === 'EADDRINUSE') {
			console.error(`Port ${port} is already in use`);
			console.error('1. Terminate the conflicting process, or');
			console.error('2. Change the port in the server configuration');
		}

		exit(1);
	});

	server.on('close', () => {
		console.log('Cleaning up resources...');
		console.log('Closing remaining connections...');
	});

	const gracefulShutdown = (signal: string): void => {
		console.warn(`${signal} signal received`);

		server.close(() => {
			console.log('Server closed gracefully');
			exit(0);
		});
	};

	process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
	process.on('SIGINT', () => gracefulShutdown('SIGINT'));

	process.on('uncaughtException', (err) => {
		console.error('Uncaught exception:', err);
		exit(1);
	});

	process.on('unhandledRejection', (reason) => {
		console.error('Unhandled rejection:', reason);
		exit(1);
	});
};
