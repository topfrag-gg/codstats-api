import { execSync } from 'node:child_process';
import console from 'node:console';
import { exit } from 'node:process';

const releaseTasks = () => {
	const runMigration = () => {
		try {
			console.log('⌛ Running Prisma migration...');
			execSync('npx prisma migrate deploy', {
				stdio: 'inherit',
				timeout: 30_000,
			});
			console.log('✅ Migration complete');
			return true;
		} catch (err) {
			console.error(
				'❌ Migration failed:',
				err instanceof Error ? err.message : err,
			);
			return false;
		}
	};

	if (!runMigration()) {
		console.error('🚨 Release tasks aborted');
		exit(1);
	}

	console.log('🎉 Release tasks completed');
};

releaseTasks();

// try {
// 	// Run prisma migration
// 	console.log('⌛ Running Prisma migration...');
// 	execSync('npx prisma migrate deploy', { stdio: 'inherit' });

// 	console.log('✅ Migration complete');
// } catch (err) {
// 	console.error('Migration failed:', err);
// 	exit(1);
// }

// console.log('✅ Release tasks completed');
