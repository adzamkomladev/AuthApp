import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import {tap} from 'rxjs/operators';

@Component({
  selector: 'auth-app-login-button',
  template: ` <button (click)="login()">Login</button> `,
  styles: [],
})
export class LoginButtonComponent {
  constructor(private readonly router: Router, private readonly authService: AuthService) {}

  login() {
    this.authService.loginWithRedirect();
  }
}
