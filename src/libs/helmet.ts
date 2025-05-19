import { type HelmetOptions } from 'helmet';

export const helmetOptions = (options?: HelmetOptions): object => {
	return {
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],
				baseUri: ["'self'"],
				scriptSrc: ["'self'", 'example.com'],
				objectSrc: ["'none'"],
				upgradeInsecureRequests: [],
			},
		},
		crossOriginEmbedderPolicy: true,
		crossOriginOpenerPolicy: { policy: 'same-origin' },
		crossOriginResourcePolicy: { policy: 'same-origin' },
		dnsPrefetchControl: { allow: false },
		expectCt: { maxAge: 86400, enforce: true },
		frameguard: { action: 'deny' },
		hidePoweredBy: true,
		hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
		ieNoOpen: true,
		noSniff: true,
		xPermittedCrossDomainPolicies: { permittedPolicies: 'none' },
		referrerPolicy: { policy: 'no-referrer' },
		xssFilter: true,
		...options, // allow overrides
	};
};
