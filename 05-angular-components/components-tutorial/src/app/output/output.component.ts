import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// <app-output>
@Component({
  selector: 'app-output',
  template: `
    <p (click)="sendToParent()">
      output works!
    </p>
  `,
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output('onClickAssaf')
  onClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent() {
    this.onClick.emit('hello world')
  }

}
