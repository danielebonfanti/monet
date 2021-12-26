import { Component, OnInit, Renderer2 } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.scss'],
})
export class ThemeSettingComponent implements OnInit {
  isChecked = false;

  constructor(
    private renderer: Renderer2,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.isChecked = this.isLightTheme();
  }

  private isLightTheme(): boolean {
    return Boolean(this.storageService.getInfo('lightTheme')) ?? false;
  }

  setTheme(checked: any): void {
    if (checked) {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
      this.storageService.setInfo('lightTheme', 'true')
    } else {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');
      this.storageService.setInfo('lightTheme', 'false')
    }
  }
}
