export function seed(knex) {
	return knex('employees')
		.del()
		.then(() => knex
			.insert([
				{
					first_name: 'Ivan',
					last_name: 'Ivanov',
					position_id: 2,
					birthday: Date.now(),
					salary: 12_345.67,
				},
				{
					first_name: 'Petr',
					last_name: 'Petrov',
					position_id: 1,
					birthday: Date.now(),
					salary: 89_012.34,
				},
			])
			.into('employees')
			.catch(error => {
				console.error(error);
			}));
}
