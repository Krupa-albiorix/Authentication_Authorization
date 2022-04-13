import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FormRoutingModule { }