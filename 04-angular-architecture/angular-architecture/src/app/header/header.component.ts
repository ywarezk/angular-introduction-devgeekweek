import { Component } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public message: string = 'hello yariv ' + this._randomService.calculateRandomNumber();

  constructor(private _randomService: RandomService) {

  }

  sayHello() {
    console.log('hello world');
  }
}
