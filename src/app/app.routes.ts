import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  // localhost:4200
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // localhost:4200/login -> tro toi module login
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  // localhost:4200/main -> tro toi module main
  {path: 'main', loadChildren: './main/main.module#MainModule'}
];
