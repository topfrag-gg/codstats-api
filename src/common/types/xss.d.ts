declare module 'express-xss-sanitizer' {
	import { RequestHandler } from 'express';
	export const xss: () => RequestHandler;
}
