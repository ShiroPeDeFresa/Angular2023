import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
              <h1>{{encabezado}}</h1>
              <img src="{{imagen}}" alt="Logo Salesianos">
              <app-Alumno></app-Alumno>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  encabezado: string = 'Datos del alumno';
  nombre : string = "Luis Miguel";
  apellidos : string = "Gil Herrera";
  imagen: string = 'https://pbs.twimg.com/media/Fmr62VDWAAEoWoo?format=png&name=small';

  getNombreCompleto(): string {
    return this.nombre + ' ' + this.apellidos;
  }
}
