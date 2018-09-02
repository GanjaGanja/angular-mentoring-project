import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth/auth.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  currentUser: User = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.currentUser.username, this.currentUser.password);
  }

}
