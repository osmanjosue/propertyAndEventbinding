import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){}
    guardarPersonas(personas:Persona[]){
        this.httpClient.put('https://listado-personas-b3d79-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(response=>console.log("resultado guardar Personas"+response),
        error=>console.log("error al guardar Personas:" +error)
        );
    }
}


/* import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){}
    guardarPersonas(personas:Persona[]){
        this.httpClient.put('https://listado-personas-b3d79-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
            response=>console.log("resultado guardar Personas" + response),
            error=>console.log("error al guardar Personas:"+error)
        );
    }
} */