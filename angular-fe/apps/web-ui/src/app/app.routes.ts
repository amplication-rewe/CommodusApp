import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/primary/primary.component').then((m) => m.PrimaryComponent),
  },

  {
    path: 'secondary',
    loadComponent: () => import('./features/secondary/secondary.component').then((m) => m.SecondaryComponent),
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
