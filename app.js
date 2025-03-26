let nuevaTarea = document.getElementById("nuevaTarea");
let mostrarTareas = document.getElementById("mostrarTareas");
let mensaje = document.getElementById("mensaje");
let arrayTareas = [];
let contador = 0;

function AgregarTarea() {
    if (nuevaTarea.value.trim() === "") {
        mensaje.innerText = "No podes agregar una tarea vacía";
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
    let contenidoHTML = ""; // Inicializamos la variable correctamente

    arrayTareas.forEach(tarea => {
        let chequeado = "";
        let tachado = "";

        if (tarea.estaTachada) {
            chequeado = "checked";
            tachado = "text-decoration: line-through;";
        }

        contenidoHTML += `
            <div class="tarea">
                <input type="checkbox" ${chequeado} onclick="marcarTarea(${tarea.id})">
                <p style="${tachado}">${tarea.titulo}</p>
                <button onclick="eliminarTarea(${tarea.id})">✖</button>
            </div>
        `;
    });

    mostrarTareas.innerHTML = contenidoHTML;
}

function marcarTarea(idTarea) {
    for (let i = 0; i < arrayTareas.length; i++) {
        if (arrayTareas[i].id === idTarea) {
            arrayTareas[i].estaTachada = !arrayTareas[i].estaTachada;
            arrayTareas[i].fechaTachada = arrayTareas[i].estaTachada ? new Date().toLocaleString() : "";
            mostrarListaTareas(); 
        }
    }
}

function eliminarTarea(idTarea) {
    for (let i = 0; i < arrayTareas.length; i++) {
        if (arrayTareas[i].id === idTarea) {
            arrayTareas.splice(i, 1); 
            mostrarListaTareas(); 
        }
    }
}