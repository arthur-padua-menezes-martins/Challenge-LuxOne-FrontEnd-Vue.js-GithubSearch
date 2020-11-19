export interface IHttpResponseBody {
  organization: string
  location: string
  followers: number
  repositories: number
  stars: number
}

export interface IHttpResponse<T> {
  statusCode: number
  body: T
}
