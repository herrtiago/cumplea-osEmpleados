import Persona from "./persona.js";
const fecha = new Date();
const personasEncontradas = JSON.parse(localStorage.getItem("personaEncontrada"));

if (personasEncontradas !== null) {
    const persona = Object.assign(new Persona(), personasEncontradas[0]);
    const respuesta = document.getElementById("respuesta");
    const labels = document.getElementById("labels");
    const nombre = document.createElement("h3");
    const fechaCumple = document.createElement("h3");
    nombre.innerText = `Nombre: ${persona.nombreCompleto()}`;
    fechaCumple.innerText = `Nacimiento: ${persona.nacimiento}`;
    labels.append(nombre);
    labels.append(fechaCumple);

    if (persona.cumpleaños()) {
        respuesta.innerText = "FELIZ CUMPLE!";
    } else {
        const fechaNacimiento = new Date(persona.nacimiento);
        const proximoCumple = new Date(fecha.getFullYear() + (fechaNacimiento.getMonth() < fecha.getMonth() || (fechaNacimiento.getMonth() === fecha.getMonth() && fechaNacimiento.getDate() <= fecha.getDate()) ? 1 : 0), fechaNacimiento.getMonth(), fechaNacimiento.getDate());
        let diasFaltantes = Math.ceil((proximoCumple- fecha) / (1000 * 60 * 60 * 24));
        respuesta.innerText = (`Faltan ${diasFaltantes+1} días para el próximo cumpleaños.`);
    }
  
}
else {
    alert("Error en la carga de datos");
}



atras.addEventListener("click", () => {
    localStorage.removeItem("personaEncontrada");
    location.href = "./index.html";
}
);


