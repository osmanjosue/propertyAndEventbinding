import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";


@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona('Juan','Perez'), 
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara')
      ];

      saludar=new EventEmitter<number>();

      constructor(private logginService:LoggingService){}

      agregarPersona(persona: Persona){
        this.logginService.enviaMensajeAConsola("agregamos persona: " + persona.nombre);
        this.personas.push(persona);
      }
}