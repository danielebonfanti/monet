import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  errorMessage = false;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  onSubmit(f: NgForm) {
    this.authenticationService
      .login({
        email: f.value.email,
        password: f.value.password,
      })
      .then(() => this.router.navigate(['/', 'new-post']))
      .catch(() => (this.errorMessage = true));
  }
}
