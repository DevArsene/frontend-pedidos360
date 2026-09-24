import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  userName = '';
  isAdmin = false;
  isOperador = false;
  isCliente = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userName = this.authService.getUserName();
    this.isAdmin = this.authService.isAdmin();
    this.isOperador = this.authService.isOperador();
    this.isCliente = this.authService.isCliente();
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }

  goToCatalog() {
    this.router.navigate(['/catalog']);
  }

  logout() {
    this.authService.logout();
  }
}
