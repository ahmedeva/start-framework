import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-line',
  imports: [FontAwesomeModule],
  templateUrl: './line.html',
  styleUrl: './line.css',
})
export class LineComponent {
  @Input({ required: true }) heading!: string;
  @Input({ required: true }) color!: string;
  @Input({ required: true }) lineBgColor!: string;
  @Input({ required: true }) customIcon = faStar;
}
