import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';

export const routes: Routes = [
  // localhost:4200/login
  {path: '', component: LoginComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)// for child vi routes trong child component
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
