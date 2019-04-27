import { accessing } from './guard/guard';
// import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:SignUpComponent},
  {path:'signup',redirectTo:''},
  {path:'dashBoard',component:DashboardComponent,canActivate:[accessing]},
  {path:'login',loadChildren:'./components/login/login-module#loginModule'},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
