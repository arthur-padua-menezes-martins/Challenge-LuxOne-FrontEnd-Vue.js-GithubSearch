import {
  IHttpResponse
} from '../../response/http-response-interface'

export interface IHttpClientGetParams {
  url: string
}

export interface IHttpClientGet {
  get: (params: IHttpClientGetParams) => Promise<IHttpResponse>
}

