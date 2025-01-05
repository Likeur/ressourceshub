import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title: 'homepage',
        loadComponent: () =>import('./layout/homepage/homepage.component')
    },
    {
        path:'linkform',
        title: 'submit a link',
        loadComponent: () =>import('./components/linkform/linkform.component')
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
