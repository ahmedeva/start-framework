import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { SafeLinkDirective } from '../../safe-link.directive';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, SafeLinkDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  iconFacebook = faFacebook;
  iconTwitter = faTwitter;
  iconLinkedIn = faLinkedin;
  iconGlobe = faGlobe;
}
