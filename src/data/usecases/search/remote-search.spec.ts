import {
  RemoteSearch
} from './remote-search'
import {
  IHttpClientGet
} from './remote-search-protocols'
import {
  mockHttpClientGet
} from './remote-search-mock'
import {
  url
} from './remote-search-utils'

interface ISystemUnderTestTypes {
  systemUnderTest: RemoteSearch
  httpClientGet: IHttpClientGet
}
const makeSystemUnderTest = async () => {
  const httpClientGet = await mockHttpClientGet()
  const systemUnderTest = new RemoteSearch(httpClientGet, url)
  
  return {
    systemUnderTest,
    httpClientGet
  } 
}

describe('', () => {
  test('', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()
  })
})
