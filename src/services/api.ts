import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getURL } from '../constants'

async function get<T = any>(endpoint: EndpointType, options: { endpointOptions?: { [name: string]: any }, fetchOptions?: AxiosRequestConfig } = {}): Promise<AxiosResponse<T>> {
  return axios.get<T>(getURL(endpoint, options.endpointOptions), options.fetchOptions)
}

async function post<T = any>(endpoint: EndpointType, data: any, options: { endpointOptions?: { [name: string]: any }, fetchOptions?: AxiosRequestConfig } = {}): Promise<AxiosResponse<T>> {
  return axios.post<T>(getURL(endpoint, options.endpointOptions), data, options.fetchOptions)
}

export {
  get,
  post
}