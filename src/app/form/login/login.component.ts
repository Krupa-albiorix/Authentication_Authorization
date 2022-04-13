import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: any;
  data: any;
  form_data!: string;
  FORM_CONSTANT = 'form_data';

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.data = JSON.parse(localStorage.getItem(this.FORM_CONSTANT)!);
    console.log(this.data);
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      if (this.loginForm.controls['email'].value === this.data.email && this.loginForm.controls['password'].value === this.data.password) {
        
        let users = {...JSON.parse(localStorage.getItem(this.FORM_CONSTANT)!), isUserLoggedIn: true};
    
        localStorage.setItem(this.FORM_CONSTANT, JSON.stringify(users));
        this.router.navigate(["home"]);
      }
    }
  }
}
