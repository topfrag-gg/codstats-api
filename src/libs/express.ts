/** @format */

import config from 'config';
import express, { Application } from 'express';

export const expressSettings = {
	// Basic settings
	env: config.get('env'),
	name: config.get('name'),
	version: config.get('version'),
	port: config.get('port'),

	// Security settings
	'trust proxy': 1,
	'x-powered-by': false,
	etag: 'strong',

	// Request handling
	'case sensitive routing': false,
	'strict routing': false,
	'show stack error': config.get('env') === 'development',
	'json escape': true,
	'json spaces': 2,
	'json replacer': undefined,
	'json limit': '100kb',
	'urlencoded extended': true,
	'urlencoded limit': '100kb',
	'urlencoded parameter limit': 1000,
	'query parser': 'simple',
};

export const setupBodyParsers = (app: Application): void => {
	app.use(express.json({ limit: '100kb', type: 'application/json' }));
	app.use(
		express.urlencoded({
			extended: true,
			limit: '100kb',
			type: 'application/x-www-form-urlencoded',
		}),
	);
};
