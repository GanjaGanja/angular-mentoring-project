import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  private navigateToLoginPage(): void {
    this.router.navigate(['login']);
  }

  public routeToLogin(): void {
    this.navigateToLoginPage();
  }

  public handleLogoff(): void {
    this.authService.logout();
    this.navigateToLoginPage();
  }
}
