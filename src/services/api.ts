import ky, { Input, Options } from 'ky'
import { APIROOT } from '../constants/endpoints'
import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  GraphQLResponse,
  RequestParameters,
} from 'relay-runtime'
import RelayQueryResponseCache from 'relay-runtime/lib/network/RelayQueryResponseCache'
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

async function graphqlPost(operation: RequestParameters, variables: Record<string, any>): Promise<GraphQLResponse> {
  return api.post('graphql', {
    prefixUrl: APIROOT,
    json: {
      query: operation.text,
      variables
    },
  }).json()
}

const cache = new RelayQueryResponseCache({ size: 250, ttl: 60 * 5 * 1000 });

const fetchFunction: FetchFunction = async function fetchQuery(
  operation,
  variables
) {
  const queryID = operation.name;
  const cachedData = cache.get(queryID, variables);
  console.log(queryID)

  if (cachedData !== null) return cachedData;

  const response = await graphqlPost(operation, variables)
  if (operation.operationKind !== 'mutation') {
    cache.set(queryID, variables, response)
  }

  return response
}

const environment = new Environment({
  network: Network.create(fetchFunction),
  store: new Store(new RecordSource()),
})


const link = new HttpLink(
  {
    uri: `${APIROOT}graphql`
  })

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authoriation: `Bearer ${localStorage.getItem('token')}`
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache()
})

export {
  get,
  post,
  environment,
  cache,
  client as ApolloClient
}