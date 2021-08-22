import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccumulationUIService {
  private readonly rootElement: HTMLElement;

  constructor() {
    this.rootElement = document.documentElement;
  }

  toggleTheme(theme: string): void {
    this.rootElement.setAttribute('theme', theme);
  }
}
