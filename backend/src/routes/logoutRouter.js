import e from 'express';
import { logoutController } from '../controller/logoutController.js';

export const logoutRouter = e.Router();

logoutRouter.post('/', logoutController.logoutEmployee);
