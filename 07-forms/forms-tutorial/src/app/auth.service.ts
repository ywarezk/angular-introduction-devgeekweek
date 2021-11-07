import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  /**
   * this will send email and password to
   * the server
   { email: '..', password: '...' }
   */
  login(emailPassword: {email: string, password: string}) {
    return this._http
      .post(
        'https://academeez-login-ex.herokuapp.com/api/users/login',
        emailPassword
      )
  }
}
