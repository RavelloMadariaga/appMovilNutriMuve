import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [loginGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage),
    canActivate: [loginGuard]
  },
  {
    path: 'datos-personales',
    loadComponent: () => import('./datos-personales/datos-personales.page').then( m => m.DatosPersonalesPage),
    canActivate: [loginGuard]
  },
  {
    path: 'estadistica',
    loadComponent: () => import('./estadistica/estadistica.page').then( m => m.EstadisticaPage),
    canActivate: [loginGuard]
  },
  {
    path: 'home1',
    loadComponent: () => import('./home1/home1.page').then( m => m.Home1Page),
    canActivate: [loginGuard]
  },
  {
    path: 'pruebas',
    loadComponent: () => import('./pruebas/pruebas.page').then( m => m.PruebasPage),
    children:[ {
      path: 'home',
      loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      canActivate: [loginGuard]
    },
    {
      path: 'chat',
      loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage),
      canActivate: [loginGuard]
    },
    {
      path: 'datos-personales',
      loadComponent: () => import('./datos-personales/datos-personales.page').then( m => m.DatosPersonalesPage),
      canActivate: [loginGuard]
    },
    {
      path: 'estadistica',
      loadComponent: () => import('./estadistica/estadistica.page').then( m => m.EstadisticaPage),
      canActivate: [loginGuard]
    },
    {
      path: 'seguimiento',
      loadComponent: () => import('./seguimiento/seguimiento.page').then( m => m.SeguimientoPage),
      canActivate: [loginGuard]
    },
    {
      path: 'rutina',
      loadComponent: () => import('./rutina/rutina.page').then( m => m.RutinaPage),
      canActivate: [loginGuard]
    },
  ]
  },
  {
    path: 'nutri-move',
    loadComponent: () => import('./nutri-move/nutri-move.page').then( m => m.NutriMovePage),
    canActivate: [loginGuard]
  },
  {
    path: 'seguimiento',
    loadComponent: () => import('./seguimiento/seguimiento.page').then( m => m.SeguimientoPage),
    canActivate: [loginGuard]
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'rutina',
    loadComponent: () => import('./rutina/rutina.page').then( m => m.RutinaPage),
    canActivate: [loginGuard]
  },

  // {
  //    path: 'example',
  //    loadComponent: () => import('./example/example.page').then( m => m.ExamplePage)
  //  },
];
