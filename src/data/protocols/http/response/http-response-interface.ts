export interface IHttpResponseBody {
  info?: {
    statusCode: number
  },
  user: {
    name: string
    image: string
    organization: string
    location: string
    followers: number
    repositories: number
    stars: number
  },
  repos: [{
    name: string
    description: string
    stars: number
  }]
}

export interface IHttpResponse<T> {
  statusCode: number
  body: T
}
