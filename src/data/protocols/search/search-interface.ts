import {
  IHttpResponseBody
} from '../http/response/http-response-interface'

export interface ISearchParams {
  url: string
}

export interface Search {
  search: (params: ISearchParams) => Promise<IHttpResponseBody>
}
