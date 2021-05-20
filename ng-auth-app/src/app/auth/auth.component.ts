import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

import {tap} from 'rxjs/operators';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;

  constructor(private readonly router: Router,private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated$.pipe(tap((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigateByUrl('home');
      }
    }));
  }

}
