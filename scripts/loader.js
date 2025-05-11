/** @format */

import { pathToFileURL } from 'node:url';
import { resolve as resolveTs } from 'ts-node/esm';
import * as tsConfigPaths from 'tsconfig-paths';

const { absoluteBaseUrl, paths } = tsConfigPaths.loadConfig();
const matchPath = tsConfigPaths.createMatchPath(absoluteBaseUrl, paths);

/**
 * Resolves a module specifier to a file URL or another specifier.
 * @param {string} specifier - The module specifier to resolve.
 * @param {object} ctx - The context object for the resolver.
 * @param {Function} defaultResolve - The default resolver function.
 * @returns {Promise} A promise that resolves to the resolved module.
 */
export function resolve(specifier, ctx, defaultResolve) {
	const match = matchPath(specifier);
	return match ?
			resolveTs(pathToFileURL(`${match}`).href, ctx, defaultResolve)
		:	resolveTs(specifier, ctx, defaultResolve);
}

export { load, transformSource } from 'ts-node/esm';
