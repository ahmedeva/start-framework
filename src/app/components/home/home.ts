import { Component } from '@angular/core';
import { LineComponent } from '../line/line';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, LineComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  iconStar = faStar;
}
