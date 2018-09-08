import { Component } from '@angular/core';

import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  public userIsAuthenticated(): boolean {
    // TODO: fix issue: userIsAuthenticated() is called multiple times
    return this.authService.isAuthenticated();
  }
}
