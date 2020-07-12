
let nombre = document.getElementById("Nombre").value;
console.log(nombre);

let Correo = document.getElementById("Correo").value;
console.log(Correo);

let Asunto = document.getElementById("Asunto").value;
console.log(Asunto);

let Mensaje = document.getElementById("Mensaje").value;
console.log(Mensaje);

let miFormulario = document.getElementById("miFormulario");
let nombreEvento = "submit";

//funcion en Js
function ImprimirData(evento){
    evento.preventDefault();// detener el funcinamiento por efecto del evento
    console.log("Disparo del Evento enviar");
    console.log("Nombre:"+nombre+"\ncorreo:"+Correo+"\nAsunto:"+Asunto+"\nMensaje:"+Mensaje);
}
miFormulario.addEventListener(nombreEvento, ImprimirData);

