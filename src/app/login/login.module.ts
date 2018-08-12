import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {routes} from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)// for child vi routes trong child component
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
