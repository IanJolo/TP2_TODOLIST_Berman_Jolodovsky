let nuevaTarea = document.getElementById("nuevaTarea");
let mostrarTareas = document.getElementById("mostrarTareas");
let mensaje = document.getElementById("mensaje");
let arrayTareas = [];
let contador = 0;

function AgregarTarea() {
    if (nuevaTarea.value.trim() === "") {
        mensaje.innerHTML = "No podes agregar una tarea vacía";
        mensaje.style.color = "red";
        return;
    }

    mensaje.innerText = ""; 
    crearObjetoTarea(nuevaTarea.value);
    nuevaTarea.value = "";  
    mostrarListaTareas();
}

function crearObjetoTarea(titulo) {
    contador++;
    let tareaObj = {
        id: contador,
        titulo: titulo,
        fechaCreada: Date.now(),
        fechaTachada: "",
        estaTachada: false
    };
    arrayTareas.push(tareaObj);
}

function mostrarListaTareas() {
    let textoDiv = ""; 

        arrayTareas.forEach(tarea => {
        let chequeado = "";
        let tachado = "";

        if (tarea.estaTachada) {
            chequeado = "checked";
            tachado = "text-decoration: line-through;";
        }

        textoDiv += `
            <div class="tarea">
                <input type="checkbox" ${chequeado} onclick="marcarTarea(${tarea.id})">
                <p style="${tachado}">${tarea.titulo}</p>
                <button class="botonEliminar" onclick="eliminarTarea(${tarea.id})">✖</button>
            </div>
        `;
    });

    mostrarTareas.innerHTML = textoDiv;
}

function marcarTarea(idTarea) {
    for (let i = 0; i < arrayTareas.length; i++) {
        if (arrayTareas[i].id === idTarea) {
            arrayTareas[i].estaTachada = !arrayTareas[i].estaTachada;
            mostrarListaTareas(); 
        }
    }
}

function eliminarTarea(idTarea) {
    for (let i = 0; i < arrayTareas.length; i++) {
        if (arrayTareas[i].id === idTarea) {
            arrayTareas[i].fechaTachada=Date.now();
            arrayTareas.splice(i, 1)
            mostrarListaTareas(); 
        }
    }
}

function mostrarTareaRapida(){
    let mensaje = document.getElementById("mensaje");
    let botonElimiar=document.getElementById("tareaMasRapida");
    let tiempoMax=99999999;
    let tareaMasRapida="";
arrayTareas.map(obj=> {
    let tiempoTardado=obj.fechaTachada-obj.fechaCreada;
        
    if(obj.estaTachada==true && tiempoTardado < tiempoMax){
        tareaMasRapida=obj.titulo;
        
    }
}
)    
   
    if(tareaMasRapida!=="" ){
    mensaje.innerHTML=`La tarea más rápida fue: ${tareaMasRapida}`
    }else if(arrayTareas.length>0) {
    mensaje.innerHTML=`No hay ninguna tarea finalizada`
    }else{
        mensaje.innerHTML=`No hay ninguna tarea pendiente`
    }
    mensaje.style.color="blue";
}