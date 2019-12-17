import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers';
import {Role} from "../../auth/user";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad, CanActivate {
  private currentRole$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.currentRole$ = this.store.select(fromRoot.getUserDataRole)
      .pipe(
        map(role => role === Role.ADMIN),
        take(1)
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.currentRole$;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentRole$;
  }
}
