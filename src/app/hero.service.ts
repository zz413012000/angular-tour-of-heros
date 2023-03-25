import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs'; // 為了使用非同步程式，要先使用 Observable
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http : HttpClient,
    private messageService: MessageService // 類型為 MessageService 私有屬性為 messageService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes';
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  //getHeroes(): Observable<Hero[]>{
  //  const heroes = of(HEROES);
  //  this.messageService.add('HeroService: fetched heroes');
  //  return heroes;
  //}
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
         tap(_ => this.log('fetched heroes')),
         catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  //getHero(id: number): Observable<Hero[]> {
  //  const hero = HEROES.find(h => h.id === id)!;
  //  this.messageService.add(`HeroService: fetched hero id=${id}`);
  //  return of(hero);
  //}
  //  getHero(id: number): Observable<Hero> {
  //  const hero = HEROES.find(h => h.id === id)!;
  //  this.messageService.add(`HeroService: fetched hero id=${id}`);
  //  return of(hero);
  //}
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
