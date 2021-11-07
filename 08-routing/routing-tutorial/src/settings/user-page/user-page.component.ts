import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
    <p>
      user-page works!
    </p>
  `,
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
