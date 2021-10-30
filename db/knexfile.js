const knexfile = {
	development: {
		client: 'pg',
		connection: 'postgres://cojurmzk:VxGIgJX7F98W518tn178YgEvUHMm8X8T@hattie.db.elephantsql.com/cojurmzk',
		pool: {
			min: 0,
			max: 5,
		},
		acquireConnectionTimeout: 10_000,
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};

export default knexfile;
