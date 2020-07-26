import Supertest from 'supertest'

import expressApp from '../../expressApp'
import serverEnv from '../../lib/server-env'
/**
 * 테스트에서는 beforeAll에서 호출해주자.
 */

export function makeRequest(): Supertest.SuperTest<Supertest.Test> {
  return Supertest(expressApp)
}

// 이거 안써봄.. ㅋㅋ
export function post(url, body): Supertest.Request {
  const req = makeRequest()
  const httpRequest = req.post(url)
  httpRequest.send(body)
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', `http://localhost:${serverEnv.getPort()}`)
  return httpRequest
}

// 이거 안써봄.. ㅋㅋ
export function get(url): Supertest.Request {
  const req = makeRequest()
  const httpRequest = req.post(url)
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', `http://localhost:${serverEnv.getPort()}`)
  return httpRequest
}
