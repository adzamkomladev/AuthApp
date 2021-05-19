import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignUpButtonComponent } from './components/sign-up-button/sign-up-button.component';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  declarations: [AuthComponent, LoginButtonComponent, SignUpButtonComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
