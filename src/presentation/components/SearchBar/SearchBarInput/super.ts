export class SuperSearchBarInputController {
  public readonly url: string = 'https://api.github.com/users'

  addEventListener (): void {

  }

  saveInLocalStorage (key: string, content: any): void {
    localStorage.setItem(
      key, JSON.stringify(content)
    )
  }
}
