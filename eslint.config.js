/**
 * ESLint configuration using flat config format. Docs:
 * https://eslint.org/docs/latest/use/getting-started
 *
 * @format
 */

import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	// JS and TS files - basic rules
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { js },
		extends: ['js/recommended'],
	},

	// JS and TS files - add browser and Node.js global variables
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},

	// TypeScript-specific rules
	tseslint.configs.recommended,
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
		ignores: ['package-lock.json'],
	},

	// Markdown files
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/gfm',
		extends: ['markdown/recommended'],
	},

	// CSS files
	{
		files: ['**/*.css'],
		plugins: { css },
		language: 'css/css',
		extends: ['css/recommended'],
	},
]);
