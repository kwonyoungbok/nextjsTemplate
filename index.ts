import next from 'next'
import moment from 'moment-timezone'

import express from './expressApp'
import serverEnv from './lib/server-env'

const port = serverEnv.getPort()
moment.tz.setDefault(serverEnv.getTimeZone())
const app = next({ dev: serverEnv.isExcutionModeIsDevelopment() })
const nextReqRequest = app.getRequestHandler()

app.prepare().then(() => {
  express.all('*', (req, res) => {
    return nextReqRequest(req, res)
  })
  express.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
