import {
  AxiosHttpClient
} from './axios-http-client'
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

describe('AxiosHttpClient', () => {
  test('should call axios with correct url', async () => {
    const { systemUnderTest } = await makeSystemUnderTest()

    systemUnderTest.get({
      url
    })
  })
})
