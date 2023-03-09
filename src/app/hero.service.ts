import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs'; // 為了使用非同步程式，要先使用 Observable

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes;
  }
}
