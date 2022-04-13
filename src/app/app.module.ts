import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatComponentsModule } from './mat-components.module';
import { FormComponent } from './form/form.component';
import { FormModule } from './form/form.module';
import { RegistrationComponent } from './form/registration/registration.component';
import { LoginComponent } from './form/login/login.component';
import { HomeComponent } from './form/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatComponentsModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
