import Persona from "./persona.js";
const container = document.getElementById("container");
const tabla = document.getElementById("table");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputCedula = document.getElementById("inputCedula");
const inputNacimiento = document.getElementById("inputNacimiento");
const cedulaBusqueda = document.getElementById("cedulaBusqueda");
const btnAgregar = document.getElementById("btnAgregar")
const btnBuscar = document.getElementById("lupita")
const listaPersonas = JSON.parse(localStorage.getItem('listaPersonas')) || [];
cargarTabla()

function cargarTabla(){
    listaPersonas.forEach(element => {
       const personaTemp = new Persona(element.nombre,element.apellido,element.cedula,element.nacimiento)
        const fila = document.createElement("tr");
        const casillaNombre = document.createElement("td");
        const casillaCumpleaños = document.createElement("td");
        casillaCumpleaños.className = "tdCumpleaños";
        casillaNombre.className = "tdNombre"
    
        casillaNombre.innerText = personaTemp.nombreCompleto();
        if (personaTemp.cumpleaños()) {
            casillaCumpleaños.innerText = "FELIZ CUMPLEAÑOS!!!";
        } else {
            casillaCumpleaños.innerText = "-------";
        }
        fila.append(casillaNombre);
        fila.append(casillaCumpleaños);
        tabla.append(fila);
    });
}

btnAgregar.addEventListener("click", () => {
    const nueva = new Persona(inputNombre.value, inputApellido.value, inputCedula.value, inputNacimiento.value);
    listaPersonas.push(nueva);
    localStorage.setItem('listaPersonas', JSON.stringify(listaPersonas));

    const fila = document.createElement("tr");
    const casillaNombre = document.createElement("td");
    const casillaCumpleaños = document.createElement("td");


    casillaCumpleaños.className = "tdCumpleaños";
    casillaNombre.className = "tdNombre"

    casillaNombre.innerText = nueva.nombreCompleto();
    if (nueva.cumpleaños()) {
        casillaCumpleaños.innerText = "FELIZ CUMPLEAÑOS!!!";
    } else {
        casillaCumpleaños.innerText = "-------";

    }

    fila.append(casillaNombre);
    fila.append(casillaCumpleaños);
    tabla.append(fila);
});


btnBuscar.addEventListener("click", () => {
    let encontrado = listaPersonas.filter(persona => persona.cedula == cedulaBusqueda.value );
    if (encontrado.length > 0) {
        localStorage.setItem("personaEncontrada",JSON.stringify(encontrado)); 
        location.href = "./detalle.html";
    }
    else {
        alert("La cedula no está registrada")
    }
});
