import { Component } from '@angular/core';
import { LineComponent } from '../line/line';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { GalleryComponent } from '../gallery/gallery';
import { type IimgData } from '../gallery/gallery.model';

@Component({
  selector: 'app-portfolio',
  imports: [LineComponent, GalleryComponent],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent {
  iconStar = faStar;

  images: IimgData[] = [
    { id: '01', path: 'assets/gallery-01.png' },
    { id: '02', path: 'assets/gallery-02.png' },
    { id: '03', path: 'assets/gallery-03.png' },
    { id: '04', path: 'assets/gallery-04.png' },
    { id: '05', path: 'assets/gallery-05.png' },
    { id: '06', path: 'assets/gallery-06.png' },
  ];
}
