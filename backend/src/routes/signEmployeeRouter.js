import e from 'express';
import { signEmployeeController } from '../controller/signEmployeeController.js';

export const signEmployeeRouter = e.Router();

signEmployeeRouter.post('/', signEmployeeController.signEmployee);
