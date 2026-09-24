import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadComponent: () =>
			import('./pages/login/login').then(m => m.LoginComponent)
	},
	{
		path: 'dashboard',
		loadComponent: () =>
			import('./pages/dashboard/dashboard').then(m => m.DashboardComponent),
		canActivate: [MsalGuard]
	},
	{
		path: 'orders',
		loadComponent: () =>
			import('./pages/orders/orders').then(m => m.OrdersComponent),
		canActivate: [MsalGuard]
	},
	{
		path: 'catalog',
		loadComponent: () =>
			import('./pages/catalog/catalog').then(m => m.CatalogComponent),
		canActivate: [MsalGuard]
	},
	{
		path: '**',
		redirectTo: 'dashboard'
	}
];
