import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  navLinks = [
    {label: 'Meldingen', path: 'reports'},
    {label: 'Categorieën', path: 'categories'},
    {label: 'Statussen', path: 'statuses'},
  ];

  constructor(router: Router, activatedRoute: ActivatedRoute) {
    this.redirectToFirstTab(router, activatedRoute);

  }

  private redirectToFirstTab(router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/admin') {
        router.navigate([this.navLinks[0].path], {relativeTo: activatedRoute.parent});
      }
    });
  }
}
