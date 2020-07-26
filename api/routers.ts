 
import * as express from 'express'

import template from './handlers/template'


export default function apiRouter() {
  const router = express.Router()
  router.get('/template', template.getServerName)

  return router
}