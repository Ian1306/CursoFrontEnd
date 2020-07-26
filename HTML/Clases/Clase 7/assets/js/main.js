$(document).ready((e) =>{
    let tarea = [];

    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
    
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
    tarea.push({
        titulo:'Preparar clase', 
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat perferendis ipsum fugit cumque commodi, animi tempora velit minima temporibus, eveniet nulla rerum reiciendis! Repellendus perferendis ullam magnam commodi reiciendis',
        estado: false,
        fecha: new Date( '2020-07-25')
    })
      
  
      
  
    

    

    $('#btn-todo').click(function(e){

        let imagenfondo = $("div.sin-tareas");
        imagenfondo.addClass("ocultar");


        for(let i = 0;i < tarea.length; i++){

          let contenedorTareas =  $('article.lista-tarea-contenido');
          contenedorTareas.append(`
                 <div class="card shadow border-0 mb-4">
                    <div class="card-body tarea-contenedor">
                             <h2 class="tarea-titulo"> 
                                ${tarea[i].titulo}
                             </h2>
                            <h2 class="tarea-boton completado-color"> 
                                <i class=" fa fa-check-circle-o"></i>
                            </h2>
                    </div>
                </div>
  
                `);
        }

    });

});
