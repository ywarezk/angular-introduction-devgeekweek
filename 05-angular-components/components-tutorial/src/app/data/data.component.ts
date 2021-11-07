import { Component, Input, OnInit } from '@angular/core';

// <app-data [someArray]="arrayInParent" >
@Component({
  selector: 'app-data',
  template: `
    <p (click)="addToParentArray()">
      data works!
    </p>
  `,
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input('someArray')
  arrayFromParent: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addToParentArray() {
    this.arrayFromParent.push('some string');
  }

}
