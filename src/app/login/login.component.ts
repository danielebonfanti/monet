import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(private readonly authenticationService: AuthenticationService) {}

  onSubmit(f: NgForm) {
    this.authenticationService.login(f.value.email, f.value.password)
       .then(() => alert("Login success"))
       .catch(() => alert("Login failed"))
  }
}
