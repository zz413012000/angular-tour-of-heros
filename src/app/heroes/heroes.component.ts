import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero'; // 定義型別
// import { Apple } from '../apple';

// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',  //  元件的 CSS 元素選擇器
  templateUrl: './heroes.component.html', // 元件範本檔案的位置。
  styleUrls: ['./heroes.component.css'] //元件私有 CSS 樣式表文件的位置
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  /*selectedHero!: Hero;*/ // 導覽到英雄詳情-HeroesComponent 中的英雄連結的章節中，刪除，因為沒有功能了
  heroes: Hero[] = [];

  // constructor(private heroService: HeroService) // 新增一個私有的 heroService 型別為 HeroService
  // { }
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //onSelect(hero: Hero): void { // 導覽到英雄詳情-HeroesComponent 中的英雄連結的章節中，刪除，因為沒有功能了
  //  this.selectedHero = hero;
  //  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  //}
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
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
