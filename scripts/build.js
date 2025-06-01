import { execSync } from 'node:child_process';
import console from 'node:console';
import { existsSync, rmSync } from 'node:fs';

// Delete .tsbuildinfo
if (existsSync('.tsbuildinfo')) {
	console.log('🚮 Removing stale .tsbuildinfo file...');
	rmSync('.tsbuildinfo');
}

// Delete existing dist folder
if (existsSync('dist')) {
	console.log('🚮 Deleting existing dist folder...');
	rmSync('dist', { recursive: true, force: true });
}

// Run TypeScript compiler
console.log('🏗️ Building project...');
execSync('tsc --project tsconfig.json && tsc-alias -p tsconfig.json', {
	stdio: 'inherit',
});
