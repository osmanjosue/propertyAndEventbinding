import { Ingreso } from "./ingreso.model";

export class IngresoServicio{

    ingresos:Ingreso[]=[
        new Ingreso("salario", 4000),
        new Ingreso("venta choche", 500000)
    ];

}