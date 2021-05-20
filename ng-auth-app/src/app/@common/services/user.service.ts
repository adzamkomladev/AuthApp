import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

import { concatMap, take } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient, private readonly auth: AuthService) {}

  currentUser() {
    return this.auth.user$.pipe(
      take(1),
      concatMap(user => {
      const params = {
          name: user?.name ?? '',
          email: user?.email ?? '',
          avatar: user?.picture ?? '',
          authId: user?.sub ?? ''
        };
        return this.http.get<User>(`${env.endpoint}/auth/me`, {params});
      })
      );
  }
}
