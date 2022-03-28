import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;

  constructor(
    private readonly storageService: LocalStorageService,
    private readonly rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  isLightTheme(): boolean {
    return this.storageService.getInfo('lightTheme') == 'true';
  }

  setLightTheme(): void {
    this.renderer.addClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');
    this.storageService.setInfo('lightTheme', 'true');
  }

  setDarkTheme(): void {
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.addClass(document.body, 'dark-theme');
    this.storageService.setInfo('lightTheme', 'false');
  }
}
