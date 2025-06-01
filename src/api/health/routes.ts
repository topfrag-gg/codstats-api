import { Router } from 'express';
import { createHealthController } from './controller';

export const createHealthRouter = (): Router => {
	const router = Router();

	const { getLiveness, getReadiness } = createHealthController();

	router.get('/live', getLiveness);
	router.get('/ready', getReadiness);

	return router;
};
