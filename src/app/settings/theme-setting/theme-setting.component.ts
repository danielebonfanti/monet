import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeSettingComponent implements OnInit {
  isChecked = false;

  constructor(
    private readonly themeService: ThemeService  
  ) {}

  ngOnInit(): void {
    this.isChecked = this.themeService.isLightTheme();
  }

  setTheme(checked: boolean): void {
    if (checked) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
}
