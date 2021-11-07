import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  template: `
    <p *ngIf="isVisible">
      if works!
    </p>
    <p>
      This is not toggeled
    </p>
    <button (click)="toggle()">
      Toggle visibility
    </button>
  `,
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {
  isVisible = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
