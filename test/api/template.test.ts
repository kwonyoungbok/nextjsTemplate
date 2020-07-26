import { makeRequest as req } from './testUtils'

describe('테스트는 이렇게 한다!', () => {
  it('테스트 샘플', async () => {
    const res = await req().get('/api/template')
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('template')
  })
})
