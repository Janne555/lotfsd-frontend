import ky from 'ky'
import { APIROOT } from '../constants/endpoints'
import store from '../Redux/store'
import { selectToken } from '../Redux/selectors'

function setBearer(headers: Headers) {
  const token = selectToken(store.getState())
  if (token) {
    headers.set('Authorization', token)
  }
}

const api = ky.create({
  prefixUrl: APIROOT,
  hooks: {
    beforeRequest: [
      (request) => {
        setBearer(request.headers)
      }
    ]
  }
})

async function get<T>(endpoint: { url: string, type: T }): Promise<T> {
  const result = await api.get(endpoint.url)
  try {
    return await result.clone().json()
  } catch {
    const text = await result.text()
    return { value: text } as any
  }
}

async function post<T>(endpoint: { url: string, type: T }, payload: any): Promise<T> {
  const result = await api.post(endpoint.url, {
    json: payload
  })

  try {
    return await result.clone().json()
  } catch {
    return { value: await result.text() } as any
  }
}

export {
  get,
  post
}