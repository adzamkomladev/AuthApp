import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth-app-login-button',
  template: ` <button (click)="login()">Login</button> `,
  styles: [],
})
export class LoginButtonComponent {
  constructor(private readonly authService: AuthService) {}

  login() {
    this.authService.loginWithRedirect();
  }
}
