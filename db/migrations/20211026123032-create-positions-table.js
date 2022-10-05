import {TABLES} from '../constants.js';

export function up(knex) {
	return knex
		.schema
		.createTable(TABLES.positions, table => {
			table.increments('id');
			table.string('position').notNullable().unique();
		})
		.catch(error => {
			console.error(error);
		});
}

export function down(knex) {
	return knex
		.schema
		.dropTable(TABLES.positions)
		.catch(error => {
			console.error(error);
		});
}
