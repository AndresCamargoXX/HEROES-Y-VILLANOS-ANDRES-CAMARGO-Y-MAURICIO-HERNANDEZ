// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'explorar',
        loadComponent: () => import('./pages/explorar/explorar.page').then(m => m.ExplorarPage)
      },
      {
        path: 'favs',
        loadComponent: () => import('./pages/favs/favs.page').then(m => m.FavsPage)
      },
      {
        path: 'config',
        loadComponent: () => import('./pages/config/config.page').then(m => m.ConfigPage)
      },
      {
        path: '',
        redirectTo: '/tabs/explorar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'detalles-personaje/:id',  // ← AGREGA ESTA RUTA
    loadComponent: () => import('./pages/detalles-personaje/detalles-personaje.page').then(m => m.DetallesPersonajePage)
  },
  {
    path: '',
    redirectTo: '/tabs/explorar',
    pathMatch: 'full'
  }
];