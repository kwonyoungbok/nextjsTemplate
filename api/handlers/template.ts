import * as express from 'express'

async function getServerName(req: express.Request, res: express.Response) {
  return res.json({
    name: 'template',
  })
}

export default {
  getServerName,
}
