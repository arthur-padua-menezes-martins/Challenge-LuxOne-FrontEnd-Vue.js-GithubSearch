import {
  RemoteSearch
} from './remote-search'
import {
  IHttpClientGet, ISearchParams
} from './remote-search-protocols'
import {
  mockHttpClientGet
} from './remote-search-mock'
import {
  url
} from './remote-search-utils'

interface ISystemUnderTestTypes {
  systemUnderTest: RemoteSearch
  httpClientGet: IHttpClientGet<any>
}
const makeSystemUnderTest = async (): Promise<ISystemUnderTestTypes> => {
  const httpClientGet = await mockHttpClientGet()
  const systemUnderTest = new RemoteSearch(httpClientGet)
  
  return {
    systemUnderTest,
    httpClientGet
  } 
}

let httpRequest: ISearchParams = {
  url: url
}

describe('RemoteSearch', () => {
  test('should call httpClientGet with correct values', async () => {
    const { systemUnderTest, httpClientGet } = await makeSystemUnderTest()

    const spyOnGet = jest.spyOn(httpClientGet, 'search')
    await systemUnderTest.search(httpRequest)

    expect(spyOnGet).toHaveBeenCalledWith(httpRequest)
  })
})
