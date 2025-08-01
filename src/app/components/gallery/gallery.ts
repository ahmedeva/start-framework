import { Component, Input } from '@angular/core';
import { type IimgData } from './gallery.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  iconStar = faStar;
  @Input({ required: true }) images!: IimgData[];
}
