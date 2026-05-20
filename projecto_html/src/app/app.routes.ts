import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Receitas } from './receitas/receitas';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
   { path: '', component: Home },           // quando clica em Home
    { path: 'receitas', component: Receitas }, // quando clica em Receitas
    { path: 'contacto', component: Contacto }, // quando clica em Contacto
    { path: '**', redirectTo: '' } 
];
