/** @format */

import process from 'node:process';
import util from 'node:util';
import chalk from 'chalk';
import config from 'config';
import winston, { format } from 'winston';

const processID = chalk.yellowBright(process.pid);

const loggerLevels = {
	fatal: 0,
	error: 1,
	warn: 2,
	success: 3,
	info: 4,
	verbose: 5,
	debug: 6,
} as const;

const loggerColors = {
	fatal: 'white bgRed bold',
	error: 'red',
	warn: 'yellow',
	success: 'brightGreen',
	info: 'brightWhite',
	verbose: 'cyan',
	debug: 'magenta',
} as const;

// const pad = (str: string, width = 2) => str.padEnd(width, '');

const levelAbbreviations =
	config.get('env') === 'production' ?
		{
			fatal: 'FTL',
			error: 'ERR',
			warn: 'WRN',
			success: 'SUC',
			info: 'INF',
			verbose: 'VRB',
			debug: 'DBG',
		}
	:	{
			fatal: 'FTL 💣',
			error: 'ERR ❌',
			warn: 'WRN ⚠️',
			success: 'SUC ✅',
			info: 'INF 🪧',
			verbose: 'VRB 🔎',
			debug: 'DBG 🧰',
		};

type LoggerLevel = keyof typeof loggerLevels;

winston.addColors(loggerColors);

const consoleFormat = winston.format.combine(
	format.splat(),
	format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
	// format.align(),
	format.printf(({ timestamp, level, message }) => {
		const isDev = config.get('env') === 'development';
		const coloredTimestamp = chalk.grey(timestamp);

		return isDev ?
				`${coloredTimestamp} (${processID}) [${level}]: ${message}`
			:	`${level}: ${message}`;
	}),
);

const fileFormat = format.combine(
	format.splat(),
	format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
	format.printf(({ timestamp, level, message }) => {
		return `${timestamp} (${process.pid}) [${level}]: ${message}`;
	}),
);

const customLogger = winston.createLogger({
	levels: loggerLevels,
	transports: [
		// Console transport
		new winston.transports.Console({
			level: 'debug',
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LoggerLevel];
					return info;
				})(),
				format.colorize({ all: true, colors: loggerColors }),
				consoleFormat,
			),
		}),

		// Combined file transport (logs all levels)
		new winston.transports.File({
			filename: './logs/combined.log',
			level: 'debug',
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LoggerLevel]
						.slice(0, 3)
						.toUpperCase();
					return info;
				})(),
				fileFormat,
			),
		}),

		// Error file transport (logs only errors and fatal levels)
		new winston.transports.File({
			filename: './logs/error.log',
			level: 'error',
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LoggerLevel]
						.slice(0, 3)
						.toUpperCase();

					return info;
				})(),
				fileFormat,
			),
		}),
	],
});

type Logger = Record<LoggerLevel, (...args: unknown[]) => void>;

// export const logger: Logger = (Object.keys(loggerLevels) as LoggerLevel[])
// 	// eslint-disable-next-line unicorn/no-array-reduce
// 	.reduce((acc, level) => {
// 		// eslint-disable-next-line security/detect-object-injection
// 		acc[level] = (...args: unknown[]) =>
// 			customLogger.log(
// 				level,
// 				args
// 					.map((arg) =>
// 						typeof arg === 'string' ? arg : (
// 							util.inspect(arg, { colors: false, depth: null })
// 						),
// 					)
// 					.join(' '),
// 			);
// 		return acc;
// 	}, {} as Logger);

export const logger: Logger = Object.fromEntries(
	(Object.keys(loggerLevels) as LoggerLevel[]).map((level) => [
		level,
		(...args: unknown[]) => {
			const message = args
				.map((arg) =>
					typeof arg === 'string' ? arg : (
						util.inspect(arg, { colors: false, depth: null })
					),
				)
				.join(' ');

			customLogger.log(level, message);
		},
	]),
) as Logger;

// logger.fatal('Logger initialized', true);
// logger.error('Logger initialized', true);
// logger.warn('Logger initialized', true);
// logger.success('Logger initialized', true);
// logger.info('Logger initialized', true);
// logger.verbose('Logger initialized', true);
// logger.debug('Logger initialized', true);
