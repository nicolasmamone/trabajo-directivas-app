import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro De Usuarios';
  mensaje = '';
  registrado = false;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  //entradas: object[];
  entradas: { nombre: string, apellido: string }[] = [];
  constructor(){
    this.entradas = [
      {nombre: 'Juan', apellido: 'Perez'},
      {nombre: 'Maria', apellido: 'Gomez'},
      {nombre: 'Pedro', apellido: 'Rodriguez'},
      {nombre: 'Luis', apellido: 'Gonzalez'},
      {nombre: 'Ana', apellido: 'Lopez'},
      {nombre: 'Jose', apellido: 'Martinez'}
    ];
  
  }

  registrarUsuario(){
    this.registrado = !this.registrado;
    this.mensaje = 'Usuario registrado con exito';
  }
}
