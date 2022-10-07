import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ing";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(chaketa){
    this.tipo =chaketa.target.value;
  }
agregarValor(){

  if (this.tipo==="ing")
    this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    
  

}
}
