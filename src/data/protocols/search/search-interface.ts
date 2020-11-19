import {
  IHttpResponseBody
} from '../http/response/http-response-interface'

export interface ISearchParams {

}

export interface Search {
  search: (params: ISearchParams) => Promise<IHttpResponseBody>
}
