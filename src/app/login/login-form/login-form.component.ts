import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  currentUser: User = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router) { }

  public onSubmit() {
    this.authService.login(this.currentUser.username, this.currentUser.password);
    this.router.navigate(['courses']);
  }

}
