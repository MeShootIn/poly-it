import process from 'node:process';
import knex from 'knex';
import knexfile from './knexfile.js';

const env = process.env.NODE_ENV || 'development';
const db = knex(knexfile[env]);

export default db;
