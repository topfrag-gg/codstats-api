/** @format */

import console from 'node:console';
import chalk from 'chalk';
import winston from 'winston';

const loggerOptions = {
	levels: {
		fatal: 0,
		error: 1,
		warn: 2,
		success: 3,
		info: 4,
		verbose: 5,
		debug: 6,
	},
};

const customLogger = winston.createLogger({
	levels: loggerOptions.levels,
	format: winston.format.combine(
		winston.format.splat(),
		winston.format.colorize(),
		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		winston.format.printf(({ timestamp, level, message }) => {
			const coloredTimestamp = chalk.gray(timestamp);
			return `${coloredTimestamp} [${level}]: ${message}`;
		}),
	),
	transports: [new winston.transports.Console({})],
});

// eslint-disable-next-line unicorn/no-array-reduce
export const logger = Object.keys(loggerOptions.levels).reduce(
	(acc, level) => {
		// eslint-disable-next-line security/detect-object-injection
		acc[level] = (...args: unknown[]) =>
			customLogger.log(level, args.map(String).join(' '));
		return acc;
	},
	{} as Record<string, (...args: unknown[]) => void>,
);

logger.info('Logger initialized', true);
logger.warn('Logger initialized', true);
logger.error('Logger initialized', true);
logger.debug('Logger initialized', true);
console.log('Logger initialized', true);
console.log('Logger initialized', { one: true, two: false });
