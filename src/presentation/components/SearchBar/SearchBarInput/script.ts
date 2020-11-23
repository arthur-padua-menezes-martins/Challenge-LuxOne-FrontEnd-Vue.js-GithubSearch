import {
  SuperSearchBarInputController
} from './super'
import {
  RemoteSearch
} from '@/data/usecases/search/remote-search'

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

    this.addListener(
      icon, ['mouseenter', 'mouseleave', 'click'], 
      [
        event => {icon.classList.add('hover__area-search-bar-icon')},
        event => { icon.classList.remove('hover__area-search-bar-icon')},
        event => { this.search = search }
      ]
    )

    this.addListener(
      input, 'keyup', (event: any) => {search = event.target?.value as string}
    )
  }

  async searchFor (search: string): Promise<any> {
    try {
      const [user, repos] = await this.searchInGitHub(
        this.HttpClient, search, this.authentication
      )

      if (user.statusCode === 200 && repos.statusCode === 200) {
        await this.saveInLocalStorage('@searchs', { ...this.search })
        await this.saveInLocalStorage('@body', Object.assign({}, {user}, {repos}))
      }
    } catch (error) {}
  }
}
