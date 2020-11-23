import {
  RemoteSearch
} from '@/data/usecases/search/remote-search'

export class SuperSearchBarInputController {
  public readonly url: string = 'https://api.github.com/users'

  addListener (element: HTMLElement | null, event: string | string[], callback: EventListenerOrEventListenerObject | EventListenerOrEventListenerObject[]): void {
    if (Array.isArray(event) && Array.isArray(callback)) {
      for (const i in event) {
        element.addEventListener(event[i], callback[i])
      }
    } else if (!Array.isArray(event) && !Array.isArray(callback)) {
      element.addEventListener(event, callback)
    }
  }

  async saveInLocalStorage (key: string, content: any): Promise<void> {
    localStorage.setItem (
      key, JSON.stringify(content)
    )
  }

  async searchInGitHub (HttpClient: RemoteSearch, search: string, authentication: string) {
    const user = await HttpClient.search({ url: `${this.url}/${search}?${authentication}` })
    const repos = await HttpClient.search({ url: `${this.url}/${search}/repos?${authentication}` })

    return [user, repos]
  }
}
