import employeeDAO from '../daos/employee.js';

function isPositiveInteger(string_) {
	const n = Math.floor(Number(string_));

	return n !== Number.POSITIVE_INFINITY && String(n) === string_ && n > 0;
}

class EmployeeService {
	async addEmployee(employee) {
		// Const {
		// 	first_name: firstName,
		// 	last_name: lastName,
		// 	position_id: positionId,
		// 	birthday,
		// 	salary,
		// } = employee;

		// // Validate employee
		// // if firstName ... throw

		return employeeDAO.addEmployee(employee);
	}

	async getEmployees() {
		return employeeDAO.getEmployees();
	}

	async getEmployeeById(id) {
		if (!isPositiveInteger(id)) {
			throw new Error('id field must be a positive integer and greater than zero');
		}

		return employeeDAO.getEmployeeById(id);
	}
}

export default new EmployeeService();
