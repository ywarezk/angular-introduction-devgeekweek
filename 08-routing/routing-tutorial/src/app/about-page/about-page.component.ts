/**

/about ====> AboutPageComponent
/settings/user ====> UserSettingsPageComponent
/settings/account ====> AccountSettingsPageComponent
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <p>
      about-page works!
    </p>
  `,
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
