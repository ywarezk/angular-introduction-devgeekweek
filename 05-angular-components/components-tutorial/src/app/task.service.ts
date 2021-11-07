import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  /**
   * go to the server and send a request to get
   * all the tasks
   */
  getTasks() {
    return this
      ._http
      .get('http://nztodo.herokuapp.com/api/tasks/?format=json')
  }
}
