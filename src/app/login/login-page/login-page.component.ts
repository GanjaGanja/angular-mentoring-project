import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private authService: AuthService) { }

  public userIsAuthenticated(): boolean {
    // TODO: fix issue: userIsAuthenticated() is called multiple times
    return this.authService.isAuthenticated();
  }

}
