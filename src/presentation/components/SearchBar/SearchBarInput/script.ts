export default class SearchBarInputController {
  public _search: string[] = []

  constructor (
    public input?: HTMLElement | null,
    public icon?: HTMLElement | null
  ) {}

  set search (search: string) {
    search = (new RegExp(search, 'gi').source)
  
    if (search) {  
      this._search.push(search)
    }
  }

  get search (): string {
    return (this._search[(this._search).length + 1])
  }

  addListeners (input: HTMLElement | null, icon: HTMLElement | null): void {
    this.input = input
    this.icon = icon

    icon?.addEventListener('mouseenter', event => {
      icon?.classList.add('hover__area-search-bar-icon')
    })

    icon?.addEventListener('mouseleave', event => {
      icon?.classList.remove('hover__area-search-bar-icon')
    })

    icon?.addEventListener('click', event => {
      this.searchFor()
    })

    input?.addEventListener('keydown', (event: any) => {
      this.search = event.target?.value as string
    })
  }

  saveSearch (search: string) {
    localStorage.setItem('@searchs', this.search)
  }

  searchFor (): any {
    let response = ''

    if (response) {
      this.search
    }
  }
}
