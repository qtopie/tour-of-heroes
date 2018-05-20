import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Hero } from '../shared/hero.model';
import * as glob from "../../shared/global"; 

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class HeroService{
    private heroesUrl = glob.server + '/heroes';  

    constructor(private http: HttpClient) { }
  
    getHeroes(): Promise<Hero[]> {
         return this.http.get(this.heroesUrl)
               .toPromise()
               .catch(this.handleError);
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
    }    
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, hero, httpOptions)
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, {name: name}, httpOptions)
            .toPromise()
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, httpOptions)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
    }
}