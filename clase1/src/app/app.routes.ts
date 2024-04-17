import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


export const routes: Routes = [

    { path: "login", component: LoginComponent },
    { path: "bienvenido", component: BienvenidoComponent },
    { path: '', redirectTo: "login", pathMatch: 'full' }, // Redirigir al componente de inicio de sesión por defecto

     
];


