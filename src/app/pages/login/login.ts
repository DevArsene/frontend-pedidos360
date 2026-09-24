import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { loginRequest } from '../../auth-config';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  constructor(private msalService: MsalService, private router: Router) {}

  login() {
    this.msalService.loginRedirect(loginRequest);
  }
}
