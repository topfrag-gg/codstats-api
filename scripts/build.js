/** @format */

import { execSync } from 'node:child_process';
import console from 'node:console';
import { existsSync, rmSync } from 'node:fs';

const distPath = './dist';
const tsbuildinfo = './.tsbuildinfo';

// Delete dist folder if it exists
if (existsSync(distPath)) {
	console.log("🗑️ Deleting existing 'dist/' folder...");
	rmSync(distPath, { recursive: true, force: true });
}

// Delete '.tsbuildinfo' file if it exists
if (existsSync(tsbuildinfo)) {
	console.log("🗑️ Deleting existing '.tsbuildinfo' file...");
	rmSync(tsbuildinfo, { recursive: true, force: true });
}

// Run TypeScript compiler
console.log('🏗️ Building project...');
execSync('tsc --project tsconfig.json && tsc-alias -p tsconfig.json', {
	stdio: 'inherit',
});
