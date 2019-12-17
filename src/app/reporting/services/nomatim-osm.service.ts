import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Result, Reverse, Search} from "../models/nomatim.types";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NomatimOSMService {

  constructor(private http: HttpClient) { }

  search(search: Search): Observable<Result[]> {
    return this.http.get<Result[]>(`${environment.nomatimApi}/search`,
      // @ts-ignore
      {params: search});
  }

  reverse(reverse: Reverse): Observable<Result> {
    return this.http.get<Result>(`${environment.nomatimApi}/reverse`,
      // @ts-ignore
      {params: reverse})
  }
}
