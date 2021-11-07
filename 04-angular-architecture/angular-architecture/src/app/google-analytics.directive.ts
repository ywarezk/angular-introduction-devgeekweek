/**
 * take template add common behavious
 */

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[google-analytics]'
})
export class GoogleAnalyticsDirective {

  constructor() { }

  @HostListener('click')
  sendToGoogleAnalytics() {
    console.log('send something to GA');
  }
}
