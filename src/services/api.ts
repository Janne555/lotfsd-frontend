import ky, { Input, Options } from 'ky'
import { APIROOT } from '../constants/endpoints'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

function setBearer(headers: Headers) {
  const token = window.localStorage.getItem("token")
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
}

const api = ky.create({
  prefixUrl: `${APIROOT}api`,
  hooks: {
    beforeRequest: [
      (request) => {
        setBearer(request.headers)
      }
    ]
  }
})

type KyFunction = (input: Input, options?: Options) => Promise<Response>
type TypedResponse<T> = Omit<Response, 'json'> & { json: () => Promise<T> }
type WithType = <T>(input: TypedEndpoint<T>, options?: Options) => Promise<TypedResponse<T>>

function withType(func: KyFunction): WithType {
  return async function <T>({ url }: TypedEndpoint<T>, options?: Options): Promise<TypedResponse<T>> {
    const response = await func(url, options)

    return Object.assign(response, {
      json(): Promise<T> {
        return response.json()
      }
    })
  }
}

const get = withType(api.get)
const post = withType(api.post)

function createApolloClient(token: string) {
  const link = new HttpLink(
    {
      uri: `${APIROOT}graphql`
    })

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return forward(operation)
  })

  return new ApolloClient({
    link: concat(authMiddleware, link),
    cache: new InMemoryCache(),
    connectToDevTools: true
  })
}


export {
  get,
  post,
  createApolloClient
}