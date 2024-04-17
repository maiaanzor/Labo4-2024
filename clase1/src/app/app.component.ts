import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   1- (app.component.html) Realizar:
// Una aplicación que se le ingresen dos edades en dos cuadro de textos
// edadUno, EdadDos
// mostrar el promedio y la suma en dos cuadros de textos nuevos
// botones "calcular" y "limpiar cuadros de textos"
//   protected edadUno :any;
//   protected edadDos :any;
//   suma = 0; 
//   protected promedio = 0;

  
//   Calcular()
//  {
//    if(this.ValidarNumero(this.edadDos) && this.ValidarNumero(this.edadUno))
//     {
//       this.suma = parseFloat(this.edadUno.toString()) + parseFloat(this.edadDos.toString());
//       this.promedio = this.suma / 2;
//     }
//     else{
//       this.edadDos = "Dato incorrecto";
//       this.edadUno = "Dato incorrecto";
//     }
   

//  }

//  Limpiar()
//  {
//   this.edadDos = 0;
//   this.edadUno = 0;
//   this.suma = 0;
//   this.promedio = 0;
//  }

//  ValidarNumero(valor: any): boolean 
//  {
//   return !isNaN(parseFloat(valor)) && isFinite(valor);
//  } 
 

}

