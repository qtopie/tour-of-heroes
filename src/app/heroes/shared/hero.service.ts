import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as glob from '../../shared/global';
import { Hero } from '../shared/hero.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class HeroService {
    private heroesUrl = glob.server + '/heroes';

    constructor(private http: HttpClient) { }

    public getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(() => this.log(`fetched heroes`)),
                catchError(this.handleError('getHeroes', [])),
            );
    }

    public getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url)
            .pipe(
                tap((_) => this.log(`fetched hero id=${id}`)),
                catchError(this.handleError<any>(`getHero id=${id}`)),
            );

    }

    public update(hero: Hero): Observable<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put<Hero>(url, hero, httpOptions)
            .pipe(
                tap((_) => this.log(`updated hero id=${hero.id}`)),
                catchError(this.handleError<any>('updateHero')),
            );
    }

    public create(name: string): Observable<Hero> {
        return this.http
            .post<Hero>(this.heroesUrl, { name }, httpOptions)
            .pipe(
                tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
                catchError(this.handleError<Hero>('addHero')),
            );
    }

    public delete(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<Hero>(url, httpOptions)
            .pipe(
                tap((_) => this.log(`deleted hero id=${id}`)),
                catchError(this.handleError<Hero>('deleteHero')),
            );
    }

    private log(message: string) {
        // TODO replace console debug
        // console.debug(message);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
