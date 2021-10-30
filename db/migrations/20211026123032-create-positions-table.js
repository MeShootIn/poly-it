export function up(knex) {
	return knex.schema
		.createTable('positions', table => {
			table.increments('id');
			table.string('position').notNullable().unique();
		})
		.catch(error => {
			console.error(error);
		});
}

export function down(knex) {
	return knex.schema
		.dropTable('positions')
		.catch(error => {
			console.error(error);
		});
}
