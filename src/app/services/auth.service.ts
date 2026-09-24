import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private msalService: MsalService) {}

  getAccount(): AccountInfo | null {
    const accounts = this.msalService.instance.getAllAccounts();
    return accounts.length > 0 ? accounts[0] : null;
  }

  getRoles(): string[] {
    const account = this.getAccount();
    if (!account) return [];
    const claims = account.idTokenClaims as any;
    return claims?.roles ?? [];
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  isAdmin(): boolean {
    return this.hasRole('ROLE_ADMINISTRADOR');
  }

  isOperador(): boolean {
    return this.hasRole('ROLE_OPERADOR');
  }

  isCliente(): boolean {
    return this.hasRole('ROLE_CLIENTE');
  }

  getUserName(): string {
    const account = this.getAccount();
    return account?.name ?? account?.username ?? 'Usuario';
  }

  logout() {
    this.msalService.logoutRedirect();
  }
}
