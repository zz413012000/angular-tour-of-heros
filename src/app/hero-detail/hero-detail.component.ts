import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'; // 導入型別
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
// export class HeroDetailsComponent {
//   @Input() hero?: Hero;
// }
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
