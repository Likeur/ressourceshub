import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title: 'homepage',
        loadComponent: () =>import('./layout/homepage/homepage.component')
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
