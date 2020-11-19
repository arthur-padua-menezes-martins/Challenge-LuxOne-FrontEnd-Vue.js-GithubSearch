import {
  IHttpResponseBody
} from '../../../../../data/protocols/http/response/http-response-interface'

interface IInformationsOfHttpResponseTyps {
  default: IHttpResponseBody
}
export const informationsOfHttpResponse: IInformationsOfHttpResponseTyps = {
  default: {
    organization: 'any_organization',
    location: 'any_location',
    followers: 0,
    repositories: 0,
    stars: 0
  }
}
