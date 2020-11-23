import axios from 'axios'
import {
  IHttpResponse,
  IHttpClientGet,
  IHttpClientGetParams
} from './axios-http-client-protocols' 

export class AxiosHttpClient implements IHttpClientGet<any> {
  async search (params: IHttpClientGetParams): Promise<IHttpResponse<any>> {
    const { url } = params

    const httpResponse = await axios.get(url)
    const { status, data } = httpResponse

    return {
      statusCode: status,
      body: data
    }
  }
}
