import config from 'config';
import { prisma } from '@src/prisma';
import { getCachedUptime } from './utils';

export const createHealthService = () => {
	const APP_NAME = config.get<string>('name') || 'codstats-api';
	const APP_VERSION = config.get<string>('version');

	const getLivenessData = () => {
		return {
			status: 'OK',
			service: APP_NAME,
			version: APP_VERSION,
			timestamp: new Date().toISOString(),
			uptime: `PR${getCachedUptime()}S`,
		};
	};

	const getReadinessData = async () => {
		try {
			const dbCheck = {
				status: (await prisma.$queryRaw`SELECT 1`) ? 'OK' : 'ERROR',
			};

			return {
				status: dbCheck.status,
				database: dbCheck.status === 'OK' ? 'Ready' : 'Disconnected',
				uptime: `PR${getCachedUptime()}S`,
			};
		} catch (err) {
			return {
				status: 'ERROR',
				error: 'Service unavailable',
				...(config.get('env') !== 'production' && {
					details: {
						database:
							err instanceof Error ?
								err.message.includes(`Can't reach database server`) ?
									'Database server unreachable'
								:	'Connection error'
							:	'Unknown error',
					},
				}),
				uptime: `PR${getCachedUptime()}S`,
			};
		}
	};

	return { getLivenessData, getReadinessData };
};
