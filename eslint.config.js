/**
 * ESLint configuration using flat config format. Docs:
 * https://eslint.org/docs/latest/use/getting-started
 * @format
 */

import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import nodePlugin from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import pluginSecurity from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
	// Ignore node_modules and dist directories
	{
		ignores: ['node_modules', 'dist', 'logs', 'coverage', '.husky', '.vscode'],
	},

	// Shared settings
	{
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
				node: {
					paths: ['./', './src'],
					moduleDirectory: ['node_modules', 'src'],
					extensions: ['.js', '.cjs', '.mjs', '.ts', '.json'],
				},
				alias: {
					map: [
						['@', '.'],
						['@/src', './src'],
					],
					extensions: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.json'],
				},
			},
		},
	},

	// js.configs.recommended,
	importPlugin.flatConfigs.recommended,

	// JS and TS files - basic rules
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: {
			js,
			unicorn: eslintPluginUnicorn,
			security: pluginSecurity,
			promise: pluginPromise,
			'unused-imports': unusedImports,
			sonarjs,
		},
		extends: ['js/recommended'],
		rules: {
			// Prettier
			'prettier/prettier': [
				'error',
				{},
				{
					usePrettierrc: true,
					fileInfoOptions: {
						withNodeModules: true,
					},
				},
			],

			// Security rules
			'security/detect-object-injection': 'warn',
			'security/detect-non-literal-fs-filename': 'warn',
			'security/detect-possible-timing-attacks': 'warn',

			// Import rules
			'import/no-unresolved': 'error',
			'import/named': 'error',
			'import/default': 'error',
			'import/namespace': 'error',
			'import/no-absolute-path': 'error',
			'import/no-cycle': 'warn',
			'import/no-self-import': 'error',
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
					optionalDependencies: false,
					peerDependencies: false,
					packageDir: path.join(__dirname, './'),
				},
			],

			// Unused imports rules
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],

			// Promise rules
			'promise/always-return': 'error',
			'promise/no-return-wrap': 'error',
			'promise/param-names': 'error',
			'promise/catch-or-return': 'error',
			'promise/no-native': 'off',

			// Unicorn rules
			'unicorn/prefer-module': 'error',
			'unicorn/prefer-node-protocol': 'error',
			'unicorn/prefer-top-level-await': 'error',
			'unicorn/no-array-reduce': 'warn',
			'unicorn/prefer-export-from': 'error',
			'unicorn/prefer-ternary': 'warn',
			'unicorn/no-null': 'off',

			// SonarJS rules
			'sonarjs/no-implicit-dependencies': 'error',

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

	// Enable security plugin
	pluginSecurity.configs.recommended,

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

	// Enable promise plugin
	pluginPromise.configs['flat/recommended'],

	// Enable prettier plugin
	eslintPluginPrettier,
	eslintConfigPrettier,
]);
