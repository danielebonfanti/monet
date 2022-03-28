import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Breakpoint } from '../model/breakpoint.enum';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  breakpoint$ = new Observable<string>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, Breakpoint.XSmall],
    [Breakpoints.Small, Breakpoint.Small],
    [Breakpoints.Medium, Breakpoint.Medium],
    [Breakpoints.Large, Breakpoint.Large],
    [Breakpoints.XLarge, Breakpoint.XLarge],
  ]);

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  getBreakpoint() {
    this.breakpoint$ = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              return this.displayNameMap.get(query) ?? 'Unknown';
            }
          }
          return 'Unknown';
        })
      );
  }
}
