/**

/ ===> HomePageComponent

 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <p>
      home-page works!
    </p>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
