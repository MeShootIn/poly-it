import employeeService from '../services/employee.js';

class EmployeeController {
	async addEmployee(request, response, _next) {
		try {
			const id = await employeeService.createEmployee(request.body);

			response.status(201).json(id);
		} catch (error) {
			response.status(500).json({
				error: error.message,
			});
		}
	}

	async getEmployees(_request, response, _next) {
		try {
			const employees = await employeeService.getEmployees();

			response.status(200).json(employees);
		} catch (error) {
			response.status(500).json({
				error: error.message,
			});
		}
	}

	async getEmployeeById(request, response, _next) {
		try {
			const parametersId = request.params.id;
			const id = parametersId.slice(1);
			const employee = await employeeService.getEmployeeById(id);

			response.status(200).json(employee);
		} catch (error) {
			response.status(500).json({
				error: error.message,
			});
		}
	}
}

export default new EmployeeController();
