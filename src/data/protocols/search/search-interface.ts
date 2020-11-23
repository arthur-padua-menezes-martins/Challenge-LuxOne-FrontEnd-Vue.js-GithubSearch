import {
  IHttpResponse
} from '../http/response/http-response-interface'

export interface ISearchParams {
  url: string
}

export interface Search<T> {
  search: (params: ISearchParams) => Promise<IHttpResponse<T>>
}
