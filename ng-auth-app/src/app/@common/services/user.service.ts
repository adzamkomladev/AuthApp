import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  currentUser() {
    return this.http.get<User>(`${env.endpoint}/users/me`);
  }
}
