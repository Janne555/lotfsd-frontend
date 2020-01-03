import ky from 'ky'
import { APIROOT } from '../constants/endpoints'
import store from '../Redux/store'
import { selectToken } from '../Redux/selectors'
import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  GraphQLResponse,
  RequestParameters,
  fetchQuery,
  GraphQLTaggedNode
} from 'relay-runtime'

function setBearer(headers: Headers) {
  const token = selectToken(store.getState())
  if (token) {
    headers.set('Authorization', token)
  }
}

const api = ky.create({
  prefixUrl: `${APIROOT}/api`,
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

async function graphqlPost(operation: RequestParameters, variables: Record<string, any>): Promise<GraphQLResponse> {
  return api.post('/graphql', {
    prefixUrl: APIROOT,
    json: {
      query: operation.text,
      variables
    }
  }).json()
}

const fetchFunction: FetchFunction = async function fetchQuery(
  operation,
  variables
) {
  return graphqlPost(operation, variables)
}

const environment = new Environment({
  network: Network.create(fetchFunction),
  store: new Store(new RecordSource()),
})

type OperationType<T> = {
  variables: Record<string, any>,
  response: GraphQLResponse<T>
}

function queryGraphql<T>(query: { taggedNode: GraphQLTaggedNode, type: T }, variables: Record<string, any>): Promise<GraphQLResponse<T>> {
  return fetchQuery<OperationType<T>>(environment, query.taggedNode, variables)
}

export {
  get,
  post,
  queryGraphql
}