
module.exports = {

  development: { 
    client: 'pg',
    connection: {
      port: 5432,
      host: '127.0.0.1',
      database: 'knex',
      user: 'knex',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },

  docker_compose: {
    client: 'pg',
    connection: {
      port: 5432,
      host: 'postgres',
      database: 'knex',
      user: 'knex',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL, // for heroku deployment
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },

  kubernetes: {
    client: 'pg',
    connection: {
      port: process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  }
};
