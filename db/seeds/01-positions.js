export function seed(knex) {
	return knex('positions')
		.del()
		.then(() => knex
			.insert([
				{
					position: 'Junior Software Engineer',
				},
				{
					position: 'Middle Software Engineer',
				},
				{
					position: 'Senior Software Engineer',
				},
			])
			.into('positions')
			.catch(error => {
				console.error(error);
			}));
}
