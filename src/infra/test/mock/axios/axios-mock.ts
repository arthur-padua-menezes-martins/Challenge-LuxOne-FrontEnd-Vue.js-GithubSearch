import axios from 'axios'

export const mockedAxiosResult = {
  status: 200,
  data: {}
}

export const makeMockedAxios = (): jest.Mocked<typeof axios> => {
  const mocked = axios as jest.Mocked<typeof axios>

  mocked.get.mockResolvedValue(mockedAxiosResult)

  return mocked
}
