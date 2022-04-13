import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from '../mat-components.module';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [
    FormComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
