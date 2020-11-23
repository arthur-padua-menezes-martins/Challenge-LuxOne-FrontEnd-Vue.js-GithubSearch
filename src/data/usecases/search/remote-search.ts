import {
  IHttpResponse,
  IHttpClientGet,
  Search, ISearchParams
} from './remote-search-protocols'

export class RemoteSearch implements Search<any> {
  constructor (private readonly httpClient: IHttpClientGet<any>) {}

  async search (params: ISearchParams): Promise<IHttpResponse<any>> {
    const { url } = params
    console.log('url: ', url)
    return await this.httpClient.search({
      url
    })
  }
}
