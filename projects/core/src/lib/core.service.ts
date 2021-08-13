import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccumulationUICoreService {
  private readonly rootElement: HTMLElement;

  constructor() {
    this.rootElement = document.documentElement;
  }

  loadTheme(defaultTheme: string = 'light'): string {
    const theme = this.getFromLocalStorage() ?? defaultTheme;
    this.setRootElementThemeAttribute(theme);
    return theme;
  }

  toggleTheme(theme: string = 'dark'): void {
    this.setToLocalStorage(theme);
    this.setRootElementThemeAttribute(theme);
  }

  private getFromLocalStorage(): string | null {
    return JSON.parse(String(localStorage.getItem('theme')));
  }

  private setToLocalStorage(value: string) {
    localStorage.setItem('theme', JSON.stringify(value));
  }

  private setRootElementThemeAttribute(theme: string): void {
    this.rootElement.setAttribute('theme', theme);
  }
}
