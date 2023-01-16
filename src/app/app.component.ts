import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1 align="center"> Hola esto es {{title}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2023';
}
