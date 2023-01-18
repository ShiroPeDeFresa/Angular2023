import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alumno',
  templateUrl: './Alumno.component.html',
  styleUrls: ['./Alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  nombre : string = "Luis Miguel";
  apellidos : string = "Gil Herrera";
  direccion : string ="Calle Juan de Austria bloque 70 4º Derecha, Cádiz";
  edad : number = 20;

  constructor() { }

  ngOnInit() {
  }

}
