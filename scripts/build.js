import { execSync } from 'node:child_process';
import console from 'node:console';

// Run TypeScript compiler
console.log('🏗️ Building project...');
execSync('tsc --project tsconfig.json && tsc-alias -p tsconfig.json', {
	stdio: 'inherit',
});
