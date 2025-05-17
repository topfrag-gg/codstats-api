/** @format */

// import console from 'node:console';
import chalk from 'chalk';
import winston from 'winston';

const loggerLevels = {
	fatal: 0,
	error: 1,
	warn: 2,
	success: 3,
	info: 4,
	verbose: 5,
	debug: 6,
} as const;

type LoggerLevel = keyof typeof loggerLevels;

const customLogger = winston.createLogger({
	levels: loggerLevels,
	level: 'debug',
	format: winston.format.combine(
		winston.format.splat(),
		// winston.format.colorize(),
		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		winston.format.printf(({ timestamp, level, message }) => {
			const coloredTimestamp = chalk.gray(timestamp);
			return `${coloredTimestamp} [${level}]: ${message}`;
		}),
	),
	transports: [new winston.transports.Console({})],
});

type Logger = Record<LoggerLevel, (...args: unknown[]) => void>;

export const logger: Logger = (Object.keys(loggerLevels) as LoggerLevel[])
	// eslint-disable-next-line unicorn/no-array-reduce
	.reduce((acc, level) => {
		// eslint-disable-next-line security/detect-object-injection
		acc[level] = (...args: unknown[]) =>
			customLogger.log(level, args.map(String).join(' '));
		return acc;
	}, {} as Logger);

logger.fatal('Logger initialized', true);
logger.error('Logger initialized', true);
logger.warn('Logger initialized', true);
logger.success('Logger initialized', true);
logger.info('Logger initialized', true);
logger.verbose('Logger initialized', true);
logger.debug('Logger initialized', true);
// console.log('Logger initialized', true);
// console.log('Logger initialized', { one: true, two: false });
