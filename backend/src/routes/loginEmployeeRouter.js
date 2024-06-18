import e from 'express';
import { loginEmployeeController } from '../controller/loginEmployeeController.js';

export const loginEmployeeRouter = e.Router();

loginEmployeeRouter.post('/', loginEmployeeController.logEmployee);
