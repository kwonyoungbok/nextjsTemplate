import knex from 'knex'

import * as knexfile from 'knexfile'

const isProduction = process.env.NODE_ENV === 'production'
export default knex(isProduction ? knexfile.production : knexfile.development)
