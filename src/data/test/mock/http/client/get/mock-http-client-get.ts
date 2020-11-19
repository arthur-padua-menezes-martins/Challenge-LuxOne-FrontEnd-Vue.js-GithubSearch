import {
  IHttpResponse,
  IHttpClientGet, IHttpClientGetParams
} from './mock-http-client-get-protocols'
import {
  informationsOfHttpResponse
} from './mock-http-client-get-utils'

class HttpClientGetStub implements IHttpClientGet {
  public url: string

  constructor (
    private readonly client_id: string,
    private readonly client_secret: string
  ) {}

  async get (params: IHttpClientGetParams): Promise<IHttpResponse> {
    const { url } = params

    this.url = url

    return {
      body: informationsOfHttpResponse.default
    }
  }
}

export const mockHttpClientGet = async (): Promise<HttpClientGetStub> => {
  return new HttpClientGetStub('any_id', 'any_secret')
}