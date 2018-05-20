import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../shared/hero.model';
import { HttpClient } from '@angular/common/http';
import * as glob from "../../shared/global";

@Injectable()
export class HeroSearchService {
  constructor(private http: HttpClient) { }
  /* GET heroes whose name contains search term */
  search(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Hero[]>(`api/heroes/?name=${term}`)
      .pipe();
  }

}
