import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('Safe Link Directive is active!');
  }

  onConfirmLeavePage(event: Event) {
    const wantsToLeave = window.confirm(
      'Are you sure you want to leave the page?'
    );
    if (wantsToLeave) {
      return;
    }
    event.preventDefault();
  }
}
