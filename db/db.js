import process from 'node:process';
import dotenv from 'dotenv';
import knex from 'knex';
import knexfile from './knexfile.js';

dotenv.config({
	path: '../.env',
});

const env = process.env.NODE_ENV || 'development';
const db = knex(knexfile[env]);

export default db;
