import e from 'express';
import { loginEmployeeController } from '../controller/loginEmployeeController.js';

export const loginEmployeeRouter = e.Router();

loginEmployeeRouter.get('/', loginEmployeeController.getAllEmployees);
loginEmployeeRouter.post('/log', loginEmployeeController.logEmployee);
