import { pattern } from '@angular/forms/signals';
import { Routes } from '@angular/router';
import { Lacos } from './pages/lacos/lacos';
import { TiposDeDados } from './pages/tipos-de-dados/tipos-de-dados';

export const routes: Routes = [
    {path: '',redirectTo: "ebook/welcome", pathMatch:'full'},

    {path: "ebook/welcome", loadComponent:()=>import('./pages/welcome/welcome').then(ana =>ana.Welcome)},
    {path: "ebook/lacos", component:Lacos},
    {path: "ebook/tipos-de-dados",  loadComponent:()=>import('./pages/tipos-de-dados/tipos-de-dados').then(paulo =>paulo.TiposDeDados)},
    {path: "ebook/variaveis",  loadComponent:()=>import('./pages/variaveis/variaveis').then(leo =>leo.Variaveis)},
    {path: "ebook/operadores",  loadComponent:()=>import('./pages/operadores/operadores').then(c =>c.Operadores)},
    {path: "ebook/estruturas-de-controles",  loadComponent:()=>import('./pages/estruturas-de-controles/estruturas-de-controles').then(rafael =>rafael.EstruturasDeControles)},


    {path:'**',loadComponent:()=> import('./pages/welcome/welcome').then(c => c.Welcome)},
];
