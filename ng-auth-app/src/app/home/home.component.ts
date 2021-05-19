import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UserService } from '../@common/services/user.service';
import { User } from '../@common/models/user.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.currentUser();
  }
}
