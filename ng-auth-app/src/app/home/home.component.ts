import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';

import { Observable } from 'rxjs';

import { UserService } from '../@common/services/user.service';

import { User } from '../@common/models/user.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$!: Observable<User>;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private readonly auth: AuthService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.currentUser();
  }

  onLogout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
