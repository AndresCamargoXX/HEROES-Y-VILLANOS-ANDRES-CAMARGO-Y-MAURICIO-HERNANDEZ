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
        path: 'favs',  // Coincide con la carpeta 'favs'
        loadComponent: () => import('./pages/favs/favs.page').then(m => m.FavsPage)
      },
      {
        path: 'config',  // Coincide con la carpeta 'config'
        loadComponent: () => import('./pages/config/config.page').then(m => m.ConfigPage)
      },
      {
        path: '',
        redirectTo: '/tabs/explorar',  // o la pestaña que quieras por defecto
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/explorar',
    pathMatch: 'full'
  }
];