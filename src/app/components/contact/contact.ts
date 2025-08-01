import { Component } from '@angular/core';
import { LineComponent } from '../line/line';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [LineComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  iconStar = faStar;
}
