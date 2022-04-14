import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  isUserLoggedIn!: boolean;
  form_data!: string;
  currentUser!: any;
  FORM_CONSTANT = 'form_data';

  constructor(public route: Router) {}

  canActivate() {
    this.currentUser = JSON.parse(localStorage.getItem(this.FORM_CONSTANT)!);
    // console.log(this.currentUser.isUserLoggedIn);
      if (this.currentUser?.isUserLoggedIn) {
        return true;
      }
      this.route.navigate(['/']);
      return false;
  }
  
}
