declare module "relay-runtime" {
  export interface GraphQLResponseWithData<T> {
    data: T
  }

  export interface GraphQLResponseWithoutData<T> {
    data?: T
  }

  export type GraphQLResponse<T = Record<string, any>> = GraphQLResponseWithData<T> | GraphQLResponseWithoutData<T>
}

export * from "relay-runtime";