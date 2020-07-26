import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as Knex from 'knex'
import * as path from 'path'

let envPath = path.resolve(process.cwd(), '.env')
if (!fs.existsSync(envPath)) {
  envPath = path.resolve(process.cwd(), '.env.defaults')
}
dotenv.config({ path: envPath })

export const development = {
  client: 'postgresql',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: Number(process.env.DATABASE_PORT),
  },

  migrations: {
    directory: path.resolve('./api/db/migrations'),
    tableName: 'knex_migrations',
  },
  acquireConnectionTimeout: 1000,
  seeds: {
    directory: path.resolve('./api/db/seeds/development'),
  },
  pool: { min: 5, max: 10 },

  log: {
    warn(message) {
      console.log('warn: ', message)
    },
    error(message) {
      console.log('error: ', message)
    },
    deprecate(message) {
      console.log('deprecate: ', message)
    },
    debug(message) {
      console.log('debug: ', message)
    },
  },
  // debug: true // 쿼리 자동출력
} as Knex.Config

export const production = {
  client: 'postgresql',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: Number(process.env.DATABASE_PORT),
  },
  migrations: {
    directory: path.resolve('./db/migrations'),
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: path.resolve('./db/seeds/production'),
  },
  pool: { min: 3, max: 8 },
} as Knex.Config
