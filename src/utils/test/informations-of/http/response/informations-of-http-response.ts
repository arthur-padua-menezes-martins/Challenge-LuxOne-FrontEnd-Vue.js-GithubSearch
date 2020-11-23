import {
  IHttpResponseBody
} from '../../../../../data/protocols/http/response/http-response-interface'

interface IInformationsOfHttpResponseTyps {
  default: IHttpResponseBody
}
export const informationsOfHttpResponse: IInformationsOfHttpResponseTyps = {
  default: {
    user: {
      name: 'any_name',
      organization: 'any_organization',
      location: 'any_location',
      followers: 0,
      repositories: 0,
      stars: 0
    },
    repo: [{
      name: 'any_name',
      description: 'any_description',
      stars: 0
    }]
  }
}
