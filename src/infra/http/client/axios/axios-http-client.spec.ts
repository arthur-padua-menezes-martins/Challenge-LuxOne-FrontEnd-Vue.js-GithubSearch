import {
  AxiosHttpClient
} from './axios-http-client'
import {
  makeMockedAxios, mockedAxiosResult
} from './axios-http-client-make'
import {
  url
} from './axios-http-client-utils'

interface ISystemUnderTestTypes {
  systemUnderTest: AxiosHttpClient
}
const makeSystemUnderTest = async (): Promise<ISystemUnderTestTypes> => {
  const systemUnderTest = new AxiosHttpClient()

  return {
    systemUnderTest
  }
}

jest.mock('axios')
const mockedAxios = makeMockedAxios()

describe('AxiosHttpClient', () => {
  test('should call axios with correct method', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()

    await systemUnderTest.search({
      url
    })

    expect(mockedAxios.get).toHaveBeenCalled()
  })

  test('should call axios with correct url', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()

    await systemUnderTest.search({
      url
    })

    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })

  test('should return the correct statusCode', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()

    const httpResponse = await systemUnderTest.search({
      url
    })

    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
