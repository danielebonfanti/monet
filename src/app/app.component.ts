import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'monet';

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isLightTheme()
      ? this.themeService.setLightTheme()
      : this.themeService.setDarkTheme();
  }
}
