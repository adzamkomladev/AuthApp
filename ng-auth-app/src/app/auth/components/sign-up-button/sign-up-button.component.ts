import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth-app-sign-up-button',
  template: ` <button (click)="signUp()">Sign up</button> `,
  styles: [],
})
export class SignUpButtonComponent {
  constructor(private readonly authService: AuthService) {}

  signUp() {
    this.authService.loginWithRedirect({ screen_hint: 'signup' });
  }
}
