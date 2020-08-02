///*
/*$(document).ready((e) => {
   /* let tarea = {
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    };*/
/*
    let tareas = getTareasEnStorage();

    $('#Guardartarea').click(function(e){
        
        let titulo = $("#Titext");
        let descripcion = $("#Tidesc");
        
        limpiarTeaxbox();
        if(!titulo.val()){
            titulo.addClass('is-invalid')
            return;
          }else{
            titulo.removeClass('is-invalid');
            titulo.addClass('is-valid')
          }
          if(!descripcion.val()){
            descripcion.addClass('is-invalid')
            return;
          }else{
            descripcion.removeClass('is-invalid');
            descripcion.addClass('is-valid')
          }
    
          let tarea = {
            titulo: titulo.val(),
            descripcion: descripcion.val(),
            estado: true,
            fecha: new Date('2019-04-25') // Este
        };

        modulo.setTareasEnStorage(tarea);
        titulo.va("");
        titulo.removeClass('is-valid');
        descripcion.val("");
        descripcion.removeClass('is-valid');
        limpiarTeaxbox();
    });

     
    /*limpiar al momento de hacer clink en el boton cancelar
    $('#Cancelartarea').click(function(e){
        limpiarTeaxbox();
      })
    /*funcion que limpias los campos
      function limpiarTeaxbox(){
        $("#Titext").val("");
        $("#Tidesc").val("");  
      }
    


    function getTareasEnStorage() {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        if (!tareas) {
            tareas = [];
            localStorage.setItem("tareas", JSON.stringify(tareas));
        }
        return tareas;
    }
   

    function setTareasEnStorage(tarea) {
        let tareas = getTareasEnStorage();
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    //setTareasEnStorage(tarea);

   
    
   

});*/