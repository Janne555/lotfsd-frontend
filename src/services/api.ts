import ky, { Input, Options } from 'ky'
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
} from 'relay-runtime'

function setBearer(headers: Headers) {
  const token = selectToken(store.getState())
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

export {
  get,
  post,
  environment
}