import {TABLES} from '../constants.js';

export function up(knex) {
	return knex
		.schema
		.createTable(TABLES.employees, table => {
			table.increments('id');
			table.string('first_name', 100).notNullable();
			table.string('last_name', 100).notNullable();
			table.integer('position_id').unsigned().notNullable();
			table.bigInteger('birthday').notNullable();
			table.decimal('salary').unsigned().notNullable();

			table.foreign('position_id').references('id').inTable(TABLES.positions);
		})
		.catch(error => {
			console.error(error);
		});
}

export function down(knex) {
	return knex
		.schema
		.dropTable(TABLES.employees)
		.catch(error => {
			console.error(error);
		});
}
