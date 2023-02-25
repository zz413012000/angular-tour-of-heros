import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',  //  元件的 CSS 元素選擇器
  templateUrl: './heroes.component.html', // 元件範本檔案的位置。
  styleUrls: ['./heroes.component.css'] //元件私有 CSS 樣式表文件的位置
})

export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  selectedHero!: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // heroes = HEROES;
  // selectedHero?: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  // constructor() { }
  // ngOnInit(): void {
  // }
}
