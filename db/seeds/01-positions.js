import {POSITIONS, TABLES} from '../constants.js';

export function seed(knex) {
	return knex(TABLES.positions)
		.del()
		.then(() => knex
			.insert(POSITIONS.map(position => ({position})))
			.into(TABLES.positions)
			.catch(error => {
				console.error(error);
			}),
		);
}
