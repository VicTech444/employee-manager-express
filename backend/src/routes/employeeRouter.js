import e from 'express';
import { employeeController } from '../controller/employeeController.js';

export const employeeRouter = e.Router();

employeeRouter.get('/', employeeController.getAllEmployees);
employeeRouter.post('/log', employeeController.logEmployee);
