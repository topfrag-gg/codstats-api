/* eslint import/namespace: off */
import { pathToFileURL } from 'node:url';
import { resolve as resolveTs } from 'ts-node/esm';
import * as tsConfigPaths from 'tsconfig-paths';

const { absoluteBaseUrl, paths } = tsConfigPaths.loadConfig();
const matchPath = tsConfigPaths.createMatchPath(absoluteBaseUrl, paths);

export const resolve = (specifier, ctx, defaultResolve) => {
	const match = matchPath(specifier);
	return match ?
			resolveTs(pathToFileURL(`${match}`).href, ctx, defaultResolve)
		:	resolveTs(specifier, ctx, defaultResolve);
};

export { load, transformSource } from 'ts-node/esm';
