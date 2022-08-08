import { Component, ElementRef, ViewChild } from '@angular/core';

import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  

  @ViewChild('nombreInput') nombreRef:ElementRef;
  @ViewChild('apellidoInput') apellidoRef: ElementRef;

  constructor(private personasService:PersonasService){
    this.personasService.saludar.subscribe((indice:number)=>alert("El indice es: "+indice));

  }

 
  agregarPersona(){
    let persona1 = new Persona(this.nombreRef.nativeElement.value, this.apellidoRef.nativeElement.value);
    this.personasService.agregarPersona(persona1);
    
  }

 

}
