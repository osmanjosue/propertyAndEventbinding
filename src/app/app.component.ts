import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan','Perez'), 
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ];

constructor (private loggingservice:LoggingService){

}

  personaAgregada(persona: Persona){
    this.loggingservice.enviaMensajeAConsola("agregamos al arreglo la nueva persona: " + persona.nombre)
    this.personas.push(persona);
  }
  
}
