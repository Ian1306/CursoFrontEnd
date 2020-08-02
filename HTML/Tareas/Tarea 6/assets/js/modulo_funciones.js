
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
let todas = function(){
    tareasArray = JSON.parse(localStorage.getItem('tareas'));
    if(tareasArray == null){
        tareasArray = [];
    }else{
        listatareacontenido.innerHTML = '';
        for(let i of tareasArray){
            listatareacontenido.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
               ${i.titulo} <h3>
                <i style="color:#df405;" class="fa fa-check-circle-o"></i></h3> 
            </div>
    
            `;

        }
    }

}

let completa = function(){
    tareasArray = JSON.parse(localStorage.getItem('tareas'));
    if(tareasArray === null){
        tareasArray = [];
    }else{
        listatareacontenido.innerHTML = '';
        for(let i of tareasArray){
            if(i.estado == true){
                listatareacontenido.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i class="far fa-check-circle"></i>
            </div>
    
            `;

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
                <i class="far fa-check-circle"></i>
            </div>
    
            `;

        }
            }
    }
}

let cambiartarea = function(activar){
    indice = tareasArray.findIndex(function(tareasArray){
        return tareasArray.titulo == activar;
    });
    if(tareasArray[indice].estado==true){
        tareasArray[indice].estado=false;
    }else{
        tareasArray[indice].estado=true;
    }
}

export{ guardar, todas, crear, 
completa,incompleta,cambiartarea}

