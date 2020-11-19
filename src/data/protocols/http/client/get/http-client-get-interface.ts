import {
  IHttpResponse
} from '../../response/http-response'

export interface IHttpClientGetParams {
  url: string
}

export interface IHttpClientGet {
  get: (params: IHttpClientGetParams) => Promise<IHttpResponse>
}

