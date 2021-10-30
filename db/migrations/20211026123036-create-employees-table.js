export function up(knex) {
	return knex.schema
		.createTable('employees', table => {
			table.increments('id');
			table.string('first_name', 100).notNullable();
			table.string('last_name', 100).notNullable();
			table.integer('position_id').unsigned().notNullable();
			table.bigInteger('birthday').notNullable();
			table.decimal('salary').notNullable();

			table.foreign('position_id').references('id').inTable('positions');
		})
		.catch(error => {
			console.error(error);
		});
}

export function down(knex) {
	return knex.schema
		.dropTable('employees')
		.catch(error => {
			console.error(error);
		});
}
