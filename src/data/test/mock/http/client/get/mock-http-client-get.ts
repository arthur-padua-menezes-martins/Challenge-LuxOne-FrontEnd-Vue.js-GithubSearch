import {
  IHttpResponse,
  IHttpClientGet, IHttpClientGetParams
} from './mock-http-client-get-protocols'

class HttpClientGetStub implements IHttpClientGet<any> {
  public url: string = ''

  constructor (
    private readonly client_id: string,
    private readonly client_secret: string
  ) {}

  async search (params: IHttpClientGetParams): Promise<IHttpResponse<any>> {
    const { url } = params

    this.url = url

    return {
      statusCode: 200,
      body: {}
    }
  }
}

export const mockHttpClientGet = async (): Promise<HttpClientGetStub> => {
  return new HttpClientGetStub('any_id', 'any_secret')
}