import e from 'express';
import { validationController } from '../controller/validationController.js';

export const validateRouter = e.Router();

validateRouter.post('/', validationController.validateEmployee);