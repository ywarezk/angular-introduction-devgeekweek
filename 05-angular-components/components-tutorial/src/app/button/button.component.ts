import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      button works!
    </p>
    <button (click)="sayHello()">
      click me
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {

  }

}
