import employeeDAO from '../daos/employee.js';

class EmployeeService {
	async addEmployee(employee) {
		return employeeDAO.addEmployee(employee);
	}

	async getEmployees() {
		return employeeDAO.getEmployees();
	}

	async getEmployeeById(id) {
		return employeeDAO.getEmployeeById(id);
	}
}

export default new EmployeeService();
