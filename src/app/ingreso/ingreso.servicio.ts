import { Ingreso } from "./ingreso.model";

export class IngresoServicio{

    ingresos:Ingreso[]=[
        new Ingreso("salario", 4000),
        new Ingreso("venta choche", 5000)
    ];

    eliminar(ingreso:Ingreso){
        const indice:number=this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }

}