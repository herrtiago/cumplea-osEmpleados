const fecha = new Date();
class Persona {
    nombre;
    apellido;
    nacimiento;
    cedula;
    constructor(nombre, apellido, cedula, nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.nacimiento = nacimiento;
    }
 
    cumpleaños() {
        let nacimientoTemp = this.nacimiento.split("-");
        let mes = + nacimientoTemp[1];
        let dia = + nacimientoTemp[2];
        if (parseInt(fecha.getMonth()) + 1 === mes && parseInt(fecha.getDate()) === dia)
            return true;
    }
    nombreCompleto() {
        let nombreCompleto = (`${this.nombre} ${this.apellido}`);
        return nombreCompleto;
    }
    getCedula(){
        return this.cedula;
    }
}

export default Persona;
