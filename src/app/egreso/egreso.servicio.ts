import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("renta depto", 900),
        new Egreso("ropa", 200)

    ];

    eliminar(tururu:Egreso){
        const borrar:number=this.egresos.indexOf(tururu);
        this.egresos.splice(borrar, 1);
    }
}