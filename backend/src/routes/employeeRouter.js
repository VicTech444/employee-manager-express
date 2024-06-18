import e from 'express';
import { employeeController } from '../controller/employeeController.js';

export const employeeRouter = e.Router();

employeeRouter.get('/get_all', employeeController.getAllEmployees);
employeeRouter.post('/personal_info', employeeController.getEmployee);
