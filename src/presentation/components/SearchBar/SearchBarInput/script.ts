import {
  RemoteSearch
} from '@/data/usecases/search/remote-search'
import {
  SuperSearchBarInputController
} from './super'

export default class SearchBarInputController extends SuperSearchBarInputController {
  private readonly authentication: string = `client_id=${this.ClientId}&client_secret=${this.ClientSecret}`
  private _search: string[] = []
  public input?: HTMLElement | null
  public icon?: HTMLElement | null

  constructor (
    private readonly HttpClient: RemoteSearch,
    private readonly ClientId: string,
    private readonly ClientSecret: string
  ) {
    super()
  }

  set search (search: any) {
    search = (new RegExp(search, 'gi').source)
  
    if (search) {  
      if (this._search.every((value) => value !== search)) {
        this._search.push(search)
      }

      this.searchFor(search)
    }
  }

  get search () {
    return this._search
  }

  addListeners (input: HTMLElement | null, icon: HTMLElement | null): void {
    let search: string = ''
    this.input = input
    this.icon = icon

    icon?.addEventListener('mouseenter', event => {
      icon?.classList.add('hover__area-search-bar-icon')
    })

    icon?.addEventListener('mouseleave', event => {
      icon?.classList.remove('hover__area-search-bar-icon')
    })

    icon?.addEventListener('click', event => {
      this.search = search
    })

    input?.addEventListener('keyup', (event: any) => {
      search = event.target?.value as string
    })
  }

  async searchFor (search: string): Promise<any> {
    try {
      const user = await this.HttpClient.search({ url: `${this.url}/${search}?${this.authentication}` })
      const repos = await this.HttpClient.search({ url: `${this.url}/${search}/repos?${this.authentication}` })

      if (user.statusCode === 200 && repos.statusCode === 200) {
        await this.saveInLocalStorage('@searchs', { ...this.search })
        await this.saveInLocalStorage('@body', Object.assign({}, {user}, {repos}))
      }
    } catch (error) {}
  }
}
