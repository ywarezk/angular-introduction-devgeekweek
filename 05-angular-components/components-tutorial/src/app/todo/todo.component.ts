/**

interact with a REST server => array => *ngFor

 */

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-todo',
  template: `
    <p>
      todo works!
    </p>
    <ul>
      <!-- <ng-container *ngIf=""> -->
      <li *ngFor="let item of todoList">
        {{ item.title }}
      </li>
      <!-- </ng-container> -->

    </ul>
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoList: any[] = []

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    // rxjs - observable
    // promise - deal with async code
    // promise.then(() => {})
    // Objservable.subscript(() => {})
    this._taskService.getTasks()
      .subscribe((tasksJson: any) => {
        this.todoList = tasksJson;
      });
  }

}
