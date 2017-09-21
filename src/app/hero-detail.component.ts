import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'toh-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
