
import * as funciones from '/assets/js/modulo_funciones.js';

$('#Guardartarea').click(function(e){

    e.preventDefault();
   
    let titulo = $("#Titext").val(); 
    let descripcion = $("#Tidesc").val();
    if(titulo.trim() !== "" && descripcion.trim() !== ""){

        funciones.crear(titulo,descripcion);
        funciones.guardar();
        limpiarTeaxbox();
    }else{
        alert('No puedes dejar un campo vacío');
    }
});


 /*limpiar al momento de hacer clink en el boton cancelar*/ 
 $('#Cancelartarea').click(function(e){
    limpiarTeaxbox();
  });

/*funcion que limpias los campos*/ 
  function limpiarTeaxbox(){
    $("#Titext").val("");
    $("#Tidesc").val("");  
  }

// Boton tareas mostrar todas
$('#btn-todo').click(function(e){
    e.preventDefault();
      funciones.todas();
   
});

// Boton tareas mostrar completas
$('#btn-Completada').click(function(e){
    e.preventDefault();

     funciones.completa();
});
    
// Boton tareas mostrar completas
$('#btn-Incompleta').click(function(e){
    e.preventDefault();
   
      funciones.incompleta();
    
 

});


  $('.lista-tarea-contenido').click( function(e){
      if(e.target.classList.contains('fa-check-circle')){
          if(e.target.style.color == 'rgb(223, 64, 90)'){
              e.target.style.color = '#9c9999';
              e.target.style.transition = "all 700ms ease";
          }else{
              e.target.style.color = '#df405a';
              e.target.style.transition = "all 700ms ease";
          };

         let activarTarea = (e.target.parentElement.innerText); 
          funciones.cambiarEstadoTarea(activarTarea);
  
      };
  });



