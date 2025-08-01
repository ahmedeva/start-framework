import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Start Framework - Home',
    loadComponent: () =>
      import('./components/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    title: 'Start Framework - About',
    loadComponent: () =>
      import('./components/about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'portfolio',
    title: 'Start Framework - Portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'contact',
    title: 'Start Framework - Contact',
    loadComponent: () =>
      import('./components/contact/contact').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    title: 'Start Framework - 404',
    loadComponent: () =>
      import('./components/not-found/not-found').then((m) => m.NotFound),
  },
];
