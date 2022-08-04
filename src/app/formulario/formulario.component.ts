import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInput') nombreRef:ElementRef;
  @ViewChild('apellidoInput') apellidoRef: ElementRef;

 
  agregarPersona(){
    let persona1 = new Persona(this.nombreRef.nativeElement.value, this.apellidoRef.nativeElement.value);
    this.personaCreada.emit(persona1);
  }

 

}
