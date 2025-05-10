/**
 * ESLint configuration using flat config format. Docs:
 * https://eslint.org/docs/latest/use/getting-started
 * @format
 */

import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import jsdoc from 'eslint-plugin-jsdoc';
import nodePlugin from 'eslint-plugin-n';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import process from 'node:process';
import tseslint from 'typescript-eslint';

export default defineConfig([
	// Ignore node_modules and dist directories
	{
		ignores: ['node_modules', 'dist'],
	},

	// JS and TS files - basic rules
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { js, unicorn: eslintPluginUnicorn },
		extends: ['js/recommended'],
		rules: {
			// Unicorn rules
			'unicorn/prefer-module': 'error',
			'unicorn/prefer-node-protocol': 'error',
			'unicorn/prefer-top-level-await': 'error',
			'unicorn/no-array-reduce': 'warn',
			'unicorn/prefer-export-from': 'error',
			'unicorn/prefer-ternary': 'warn',
			'unicorn/no-null': 'warn',

			'linebreak-style': ['error', 'unix'],
			'max-len': [
				'error',
				{
					code: 80,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreComments: true,
				},
			],
			indent: ['error', 'tab', { SwitchCase: 1 }],
			quotes: [
				'error',
				'single',
				{ allowTemplateLiterals: true, avoidEscape: true },
			],
			semi: ['error', 'always'],
			eqeqeq: 'error',
			'arrow-spacing': ['error', { before: true, after: true }],
			'brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'object-curly-spacing': ['error', 'always'],
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'no-trailing-spaces': 'error',
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'no-debugger': 'error',
			'lines-around-comment': [
				'error',
				{
					beforeBlockComment: true,
					afterBlockComment: false,
					beforeLineComment: true,
					afterLineComment: false,
					allowBlockStart: true,
					allowBlockEnd: true,
					allowObjectStart: true,
					allowObjectEnd: true,
					allowArrayStart: true,
					allowArrayEnd: true,
				},
			],
		},
	},

	// JS and TS files - add browser and Node.js global variables
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { n: nodePlugin },
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020,
				...globals.nodeBuiltin,
			},
		},
		rules: {
			...nodePlugin.configs['flat/recommended-script'].rules,
			'n/no-unpublished-import': 'error',
			'n/no-unpublished-require': 'error',
			'n/exports-style': ['error', 'exports'],
			'n/no-missing-import': ['error', { tryExtensions: ['.js', '.ts'] }],
		},
	},

	// TypeScript-specific rules
	tseslint.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: process.cwd(),
			},
		},
		plugins: { '@typescript-eslint': tseslint.plugin },
		rules: {
			...tseslint.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},

	// JSON-specific settings
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
		ignores: ['package-lock.json', 'tsconfig.json'],
	},

	// JSDoc settings
	{
		files: ['**/*.js', '**/*.ts'],
		plugins: { jsdoc },
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		rules: {
			...jsdoc.configs['flat/recommended'].rules,
			'jsdoc/require-description': 'warn',
			'jsdoc/check-tag-names': ['error', { definedTags: ['format'] }],
		},
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
