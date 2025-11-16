import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gits/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gits/pages/trending-page/trending-page.component'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gits/pages/search-page/search-page.component'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
