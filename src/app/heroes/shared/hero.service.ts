import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable, of } from 'rxjs';

import { Hero } from '../shared/hero.model';
import * as glob from "../../shared/global";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
    private heroesUrl = glob.server + '/heroes';

    constructor(private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl);
    }

    getHero(id: number): Observable<Hero> {
        return this.getHeroes().map(heroes => heroes.find(hero => hero.id === id));
    }

    update(hero: Hero): Observable<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put<Hero>(url, hero, httpOptions)
            .map(() => hero);
    }
    
    create(name: string): Observable<Hero> {
        return this.http
            .post<Hero>(this.heroesUrl, { name: name }, httpOptions);
    }

    delete(id: number): Observable<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<void>(url, httpOptions)
            .map(() => null)
    }
}