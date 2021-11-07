import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="login" (ngSubmit)="sendLogin()">
      <div>
        <input
          formControlName="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <input
          formControlName="password"
          type="password"
          name="password"
          placeholder="*******"
        />
      </div>
      <button type="submit">
        Login
      </button>
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login.value = { email: 'what the user types', password: '****'}
  login = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl()
  })

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  /**
   * grab the input form the form and send it to
   * server
   * https://academeez-login-ex.herokuapp.com/api/users/login
   */
  sendLogin() {
    this._authService.login(this.login.value)
      .subscribe((jsonFromServer) => {
        console.log(jsonFromServer);
      })
  }

}

