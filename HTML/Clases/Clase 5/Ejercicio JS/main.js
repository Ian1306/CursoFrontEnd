


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
    //console.log("Disparo del Evento enviar");
    let nombre = document.getElementById("Nombre").value;
    let Mensaje = document.getElementById("Mensaje").value;
    let Correo = document.getElementById("Correo").value;
    let Asunto = document.getElementById("Asunto").value;
   
    if(validacion()){
        console.log("Nombre:"+nombre+"\ncorreo:"+Correo+"\nAsunto:"+Asunto+"\nMensaje:"+Mensaje);
        
    }
      
  
}
miFormulario.addEventListener(nombreEvento, ImprimirData);

//condicionamiento de la longitud de los campos



function validacion(){
        let long_nombre = document.getElementById("Nombre").length;
        //console.log(long_nombre.length);

        let long_correo = document.getElementById("Correo").length;
        //console.log(long_correo.length);

        let long_asunto = document.getElementById("Asunto").length;
        //console.log(long_asunto.length);

        let long_mensaje =  document.getElementById("Mensaje").length;
        //console.log(long_mensaje.length);


    if(long_nombre < 5 || long_nombre >15){


    }else if(long_correo < 5 || long_correo > 25){
    
    
    
    }else if(long_asunto < 5 || long_asunto > 25){
    
    
    
    }else if (long_mensaje < 5 || long_mensaje > 50){
    
    
    }

}
