import {POSITIONS, TABLES} from '../constants.js';

function randomNumber(a, b) {
	return Math.random() * (b - a + 1) + a;
}

function randomInteger(a, b) {
	return Math.floor(randomNumber(a, b));
}

function randomEmployee({first_name, last_name}) {
	const position_id = randomInteger(1, POSITIONS.length);

	return {
		first_name,
		last_name,
		position_id,
		birthday: randomInteger(0, Date.now()),
		salary: (randomNumber(10_000, 100_000) * position_id).toFixed(2),
	};
}

export function seed(knex) {
	return knex(TABLES.employees)
		.del()
		.then(() => knex
			.insert([
				randomEmployee({first_name: 'Timofei', last_name: 'Pavlov'}),
				randomEmployee({first_name: 'Andrei', last_name: 'Alekseev'}),
				randomEmployee({first_name: 'Dmitrii', last_name: 'Vasiliev'}),
				randomEmployee({first_name: 'Vladimir', last_name: 'Ivanov'}),
				randomEmployee({first_name: 'Ivan', last_name: 'Glebov'}),
				randomEmployee({first_name: 'Evgenii', last_name: 'Vladimirov'}),
				randomEmployee({first_name: 'Nikolai', last_name: 'Kirillov'}),
			])
			.into(TABLES.employees)
			.catch(error => {
				console.error(error);
			}),
		);
}
