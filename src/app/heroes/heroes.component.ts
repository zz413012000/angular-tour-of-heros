import { Component,OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { Apple } from '../apple';
@Component({
  selector: 'app-heroes',  //  元件的 CSS 元素選擇器
  templateUrl: './heroes.component.html', // 元件範本檔案的位置。
  styleUrls: ['./heroes.component.css'] //元件私有 CSS 樣式表文件的位置
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windsrorm'
  };
  apple: Apple = {
    id: 2,
    name: 'AppleAtk'
  }
  constructor() { }
  ngOnInit(): void {
  }
}
