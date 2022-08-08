import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";


@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona('Juan','Perez'), 
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara')
      ];

      constructor(private logginService:LoggingService){}

      agregarPersona(persona: Persona){
        this.logginService.enviaMensajeAConsola("agregamos persona: " + persona.nombre);
        this.personas.push(persona);
      }
}