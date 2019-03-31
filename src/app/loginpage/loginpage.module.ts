import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginpageComponent} from './loginpage.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [ {
path: 'login' , component: LoginComponent }];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginpageModule {
}
