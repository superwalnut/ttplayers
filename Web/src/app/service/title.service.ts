import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  default_title = 'Australian Table Tennis Players - STATISTICS & RANKING';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private title: Title
  ) { }

  boot() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activeRoute),
      map(route => route.firstChild),
      switchMap(route => route.data),
      map((data) => {
        return data && data.title ? `${data.title}` : this.default_title;
      })
    ).subscribe((current_title) => this.title.setTitle(current_title));
  }
}
