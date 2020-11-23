export class SuperSearchBarInputController {
  public readonly url: string = 'https://api.github.com/users'

  addEventListener (): void {

  }

  async saveInLocalStorage (key: string, content: any): Promise<void> {
    localStorage.setItem(
      key, JSON.stringify(content)
    )
  }
}
