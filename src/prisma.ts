import config from 'config';
import { PrismaClient } from '../generated/prisma';
import { logger } from './utils/logger';

const DATABASE_URL =
	(config.get('database_url') as string) || process.env.DATABASE_URL;

export const prisma = new PrismaClient({
	datasources: {
		db: { url: DATABASE_URL },
	},
});

export const connectToDatabase = async () => {
	try {
		await prisma.$connect();
		logger.success('Connected to the database');
	} catch (error) {
		logger.error('Error connecting to the database:', error);
	}
};
