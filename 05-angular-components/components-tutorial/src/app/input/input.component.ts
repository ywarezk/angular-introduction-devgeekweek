import { Component, Input, OnInit } from '@angular/core';

// <nz-input-neomi>
@Component({
  selector: 'nz-input-neomi',
  template: `
    <p>
      input works! {{msg}}
    </p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input('message')
  msg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
