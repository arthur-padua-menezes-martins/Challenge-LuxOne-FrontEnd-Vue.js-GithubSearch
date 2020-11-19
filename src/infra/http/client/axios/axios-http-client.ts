import axios from 'axios'
import {
  IHttpResponse,
  IHttpClientGet,
  IHttpClientGetParams
} from './axios-http-client-protocols' 

export class AxiosHttpClient implements IHttpClientGet<any> {
  async get (params: IHttpClientGetParams): Promise<IHttpResponse<any>> {
    const { url } = params

    const httpResponse = await axios.get(url)
    
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
