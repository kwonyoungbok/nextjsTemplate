import express from 'express'
import routers from './api/routers'

const server = express()
server.use('/api',routers())




export default server