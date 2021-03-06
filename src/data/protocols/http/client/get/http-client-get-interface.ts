import {
  IHttpResponse
} from '../../response/http-response-interface'

export interface IHttpClientGetParams {
  url: string
}

export interface IHttpClientGet<T> {
  search: (params: IHttpClientGetParams) => Promise<IHttpResponse<T>>
}

