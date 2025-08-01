import { Component } from '@angular/core';
import { LineComponent } from '../line/line';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [LineComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  iconStar = faStar;
}
