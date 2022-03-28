import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private _localStorage = window.localStorage;

  constructor() {}

  setInfo(key: string, data: string) {
    this._localStorage.setItem(key, data);
  }

  getInfo(key: string) {
    return this._localStorage.getItem(key);
  }

  clearInfo(key: string) {
    this._localStorage.removeItem(key);
  }

  clearAllLocalStorage() {
    this._localStorage.clear();
  }
}
