import {
  IHttpResponseBody,
  IHttpClientGet,
  Search, ISearchParams
} from './remote-search-protocols'

export class RemoteSearch implements Search {
  constructor (
    private readonly httpClientGet: IHttpClientGet
  ) {}

  async search (params: ISearchParams): Promise<IHttpResponseBody> {
    const httpResponse = await this.httpClientGet.get({
      url: params.url
    })

    return httpResponse.body
  }
}
