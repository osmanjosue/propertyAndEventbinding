import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  

 nombreInput:string;
apellidoInput:string;

  constructor(private personasService:PersonasService, private router:Router){
    this.personasService.saludar.subscribe((indice:number)=>alert("El indice es: "+indice));

  }

 
  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.agregarPersona(persona1);
    this.router.navigate(['personas']);
    
  }

 

}
