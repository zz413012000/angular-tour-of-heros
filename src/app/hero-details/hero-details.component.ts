import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'; // 導入型別
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
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
