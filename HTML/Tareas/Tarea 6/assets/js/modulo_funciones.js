
let tareasArray =[];

 let crear = function(titulo, descripcion){
    let objeto = {
        titulo: titulo,
        descripcion: descripcion,
        estado: false
    }
    tareasArray.push(objeto);
    return objeto;
        

 }


 let guardar = function(){
    if(JSON.parse(localStorage.getItem('tareas'))){
        JSON.parse(localStorage.getItem('tareas')).forEach((elemento, indice, arreglo)=>{
            tareasArray.push(elemento);
        });
    }

    localStorage.setItem('tareas', JSON.stringify(tareasArray));
}



let listatareacontenido = document.querySelector('.lista-tarea-contenido');

function insertHtml(){
    $(".lista-tarea-contenido").html("<div class='sin-tareas d-flex justify-content-center align-items-end'> <p class='text-center text-muted'>No se encontraron tareas.</p> </div>")
};



let todas = function(){
    tareasArray = JSON.parse(localStorage.getItem('tareas'));
    if(tareasArray == null){
        tareasArray = [];
        
    }else{
        listatareacontenido.innerHTML = '';
        for(let i of tareasArray){
            if(i.estado == true ){
                listatareacontenido.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
               ${i.titulo} 
                <i style="color:#49dcb1;"  class="fa fa-check-circle-o"></i>
            </div>
    
            `;
            }else{
                listatareacontenido.innerHTML += 
                `
                <div class="alert alert-dark d-flex justify-content-between" role="alert">
                   ${i.titulo} 
                    <i style="color:#df405a;" class="fa fa-check-circle-o"></i>
                </div>
        
                `;
            }

        }
    }

}



let completa = function(){
    tareasArray = JSON.parse(localStorage.getItem('tareas'));
    if(tareasArray == null){
       
        tareasArray = [];

    }else{
        listatareacontenido.innerHTML = '';
        for(let i of tareasArray){
            if(i.estado == true){
                listatareacontenido.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i style="color:#49dcb1;" class="fa fa-check-circle-o"></i>
            </div>
    
            `;

        }else{
            insertHtml();
        }
            }
    }
}

let incompleta = function(){
    tareasArray = JSON.parse(localStorage.getItem('tareas'));
    if(tareasArray === null){
       tareasArray = [];
     
    }else{
        listatareacontenido.innerHTML = '';
        for(let i of tareasArray){
            if(i.estado == false){
                listatareacontenido.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i style="color: #df405a;"  class="fa fa-check-circle-o"></i>
            </div>
    
            `;

        }else{
            insertHtml();
        }
            }
    }
}
let cambiartarea = function(activar){
    indice = tareasArray.find(function(tareasArray){
        return tareasArray.titulo == activar;
    });
    if(tareasArray[indice].estado == true){
        tareasArray[indice].estado = false;
    }else{
        tareasArray[indice].estado =true;
    }

    localStorage.setItem('tareas', JSON.stringify(tareasArray));


} 

export{ guardar, todas, crear, 
completa,incompleta,cambiartarea,insertHtml}

