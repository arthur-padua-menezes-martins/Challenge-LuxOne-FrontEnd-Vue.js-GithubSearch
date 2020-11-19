import axios from 'axios'
import {
  AxiosHttpClient
} from './axios-http-client'
import {
  url,
  axiosMockResult
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
const mockedAxios = axios as jest.Mocked<typeof axios>
mockedAxios.get.mockResolvedValue(axiosMockResult)

describe('AxiosHttpClient', () => {
  test('should call axios with correct method', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()

    await systemUnderTest.get({
      url
    })

    expect(mockedAxios.get).toHaveBeenCalled()
  })

  test('should call axios with correct url', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()

    await systemUnderTest.get({
      url
    })

    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })

  test('should return the correct statusCode', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()

    const httpResponse = await systemUnderTest.get({
      url
    })

    expect(httpResponse).toEqual({
      statusCode: axiosMockResult.status,
      body: axiosMockResult.data
    })
  })
})
