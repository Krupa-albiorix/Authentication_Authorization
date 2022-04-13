import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../Validator/confirmed.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: any;
  user!: any;
  checkArray!: any;
  FORM_CONSTANT = 'form_data';

  constructor(private formBuilder: FormBuilder, private route1: Router) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]],
      checkArray: this.formBuilder.array([], [Validators.required])
    }, { 
      validator: ConfirmedValidator('password', 'cpassword')
    });
  }

  onSubmit() {
    console.log(this.registrationForm)
    if (this.registrationForm.valid) {
      if (localStorage.getItem(this.FORM_CONSTANT)) {
        localStorage.removeItem(this.FORM_CONSTANT);
      }
      localStorage.setItem(this.FORM_CONSTANT, JSON.stringify(this.registrationForm.value));
      this.route1.navigate(['/']);
    }
    console.log(this.registrationForm.value);
  }

  Data: Array<any> = [
    { name: 'Reading', value: 'Reading' },
    { name: 'Dancing', value: 'Dancing' },
    { name: 'Listning Music', value: 'Listning Music' },
    { name: 'Cricket', value: 'Cricket' },
    { name: 'Cookig', value: 'Cookig' }
  ];

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.registrationForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
       const index = checkArray.controls.findIndex(x => x.value === e.target.value);
       checkArray.removeAt(index);
    }

  }

}
