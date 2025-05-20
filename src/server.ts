import { exit } from 'node:process';
import config from 'config';
import { createApp } from './app';
import { logger } from './utils/logger';

export const startServer = (): void => {
	// Load the server configuration variables
	const protocol: string = config.get('protocol');
	const env: string = config.get('env') || 'development';
	const host: string = process.env.HOST ?? 'localhost';
	const port: number = Number(process.env.PORT) || 3000;

	// Initialize and start the server
	const app = createApp();
	const server = app.listen(port, host);

	// Handle successful startup
	server.on('listening', () => {
		logger.info(`Starting server in ${env} mode`);
		logger.info(`Server is listening at: ${protocol}://${host}:${port}`);

		if (env === 'development') logger.warn('Press CTRL+C to stop the server');
	});

	// Handle server errors
	server.on('error', (err: NodeJS.ErrnoException) => {
		logger.error('Server encountered an error:', err);

		if (err.code === 'EADDRINUSE') {
			logger.error(`Port ${port} is already in use`);
			logger.error('1. Terminate the conflicting process, or');
			logger.error('2. Change the port in the server configuration');
		}

		exit(1);
	});

	// Handle server close
	server.on('close', () => {
		logger.info('Cleaning up resources...');
		logger.info('Closing remaining connections...');
	});

	// Graceful shutdown handler
	const gracefulShutdown = (signal: string): void => {
		logger.warn(`${signal} signal received`);

		server.close(() => {
			logger.info('Server closed gracefully');
			exit(0);
		});
	};

	// OS signal handlers for graceful shutdown
	process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
	process.on('SIGINT', () => gracefulShutdown('SIGINT'));

	// Catch unhandled errors and rejections
	process.on('uncaughtException', (err) => {
		logger.error('Uncaught exception:', err);
		exit(1);
	});

	process.on('unhandledRejection', (reason) => {
		logger.error('Unhandled rejection:', reason);
		exit(1);
	});
};
