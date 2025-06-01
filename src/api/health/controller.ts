import type { RequestHandler } from 'express';
import type { LivenessResponse, ReadinessResponse } from './types';
import createError from 'http-errors';
import { logger } from '@utils/logger';
import { createHealthService } from './service';

export const createHealthController = () => {
	const { getLivenessData, getReadinessData } = createHealthService();

	const getLiveness: RequestHandler = (_req, res, next) => {
		try {
			const response: LivenessResponse = getLivenessData();
			res.status(200).json(response);
		} catch (err) {
			logger.error('Error performing liveness check:', err);

			res.status(500).json({
				status: 'Error',
				message: 'API is not responding',
				error: err instanceof Error ? err.message : 'Unknown error',
			});

			next(createError(500, 'API is not responding'));
		}
	};

	const getReadiness: RequestHandler = async (_req, res, next) => {
		try {
			const response: ReadinessResponse = await getReadinessData();
			res.status(200).json(response);
		} catch (err) {
			logger.error('Error performing readiness check:', err);

			res.status(500).json({
				status: 'Error',
				message: 'API is not ready',
				error: err instanceof Error ? err.message : 'Unknown error',
			});

			next(createError(500, 'API is not ready'));
		}
	};

	return { getLiveness, getReadiness };
};
