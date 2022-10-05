import express from 'express';
import employeeController from '../controllers/employee.js';

const employeesRouter = express.Router();

employeesRouter
	.route('/')
	.get(employeeController.getEmployees);

employeesRouter
	.route('/:id')
	.get(employeeController.getEmployeeById);

export default employeesRouter;
