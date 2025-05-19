/** @format */

import process from 'node:process';
import chalk from 'chalk';
import config from 'config';
import { format } from 'date-fns';
import { Request, Response } from 'express';
import morgan from 'morgan';
import prettyMs from 'pretty-ms';

const skipLogging = (): boolean => config.get('env') !== 'development';

const formatResponseTime = (ms: string | undefined): string => {
	return prettyMs(Number(ms));
};

const formatContentLength = (
	req: Request,
	res: Response,
	tokens: morgan.TokenIndexer<Request, Response>,
): string => {
	const length = tokens.res?.(req, res, 'content-length');
	return (
		req.headers['accept-encoding'] ? chalk.gray('compressed')
		: length ? `${length} bytes`
		: '?'
	);
};

const parseUserAgent = (ua?: string): string => {
	if (!ua) return 'none';

	// Special case for curl
	if (ua.includes('curl')) {
		const version = ua.split('curl/')[1]?.split(' ')[0];
		return version ? `curl/${version}` : 'curl';
	}

	// Basic browser detection
	const match = ua.match(/(Firefox|Chrome|Safari|Edge|Opera)\/([\d.]+)/);
	return match ? `${match[1]}/${match[2]}` : ua.slice(0, 40);
};

const colorizeMethod = (method: string): string => {
	const colorMap: Record<string, typeof chalk> = {
		GET: chalk.greenBright,
		POST: chalk.blueBright,
		PUT: chalk.yellowBright,
		DELETE: chalk.redBright,
		PATCH: chalk.cyanBright,
	};
	return (colorMap[method.toUpperCase()] ?? chalk.white)(method);
};

const colorizeStatus = (status: string): string => {
	const statusCode = parseInt(status, 10);
	if (isNaN(statusCode)) return chalk.white(status);

	if (statusCode >= 500) return chalk.red(status);
	if (statusCode >= 400) return chalk.yellow(status);
	if (statusCode >= 300) return chalk.cyan(status);
	return chalk.green(status);
};

export const httpLogFormatter = (
	tokens: morgan.TokenIndexer<Request, Response>,
	req: Request,
	res: Response,
): string => {
	const timestamp = chalk.grey(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
	const pid = chalk.yellowBright(`(${process.pid})`);
	const method = colorizeMethod(tokens.method?.(req, res) ?? '');
	const url = chalk.cyanBright(tokens.url?.(req, res) ?? '');
	const status = colorizeStatus(tokens.status?.(req, res) ?? '');
	const responseTime = chalk.green(
		formatResponseTime(tokens['response-time']?.(req, res)),
	);

	const systemInfo =
		skipLogging() ?
			`${chalk.gray('REQ')}:`
		:	`${timestamp} ${pid} [${chalk.gray('REQ 🛜')}]:`;

	return [
		systemInfo,
		`${method} ${url} → ${status} - ${responseTime}`,
		`| Content-Length: ${chalk.magenta(formatContentLength(req, res, tokens))}`,
		`| IP: ${chalk.whiteBright(req.ip)}`,
		`| Agent: ${chalk.grey(parseUserAgent(req.headers['user-agent']))}`,
	].join(' ');
};

export const httpLogger = morgan(httpLogFormatter);
export default httpLogger;
