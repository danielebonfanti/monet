import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(private readonly authenticationService: AuthenticationService) {}

  onSubmit(f: NgForm) {
    this.authenticationService
      .login({ email: f.value.email, password: f.value.password })
      .then(() => alert('Login success'))
      .catch(() => alert('Login failed'));
  }
}
