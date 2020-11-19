import axios from 'axios'
import {
  IHttpClientGet, IHttpClientGetParams
} from './axios-http-client-protocols' 

export class AxiosHttpClient {
  async get (params: IHttpClientGetParams): Promise<void> {
    const { url } = params

    await axios.get(url)
  }
}
