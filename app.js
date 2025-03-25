let nuevaTarea= document.getElementById("nuevaTarea");
let arrayTareas=[];
let textoAMostrar;

function AgregarTarea(){
    if(nuevaTarea.value
        !==""){
    funcHacerObjeto(nuevaTarea.value)   
    nuevaTarea.value="";
    textoAMostrar="";
    document.getElementById("mostrarTareas").innerHTML=textoAMostrar;
    arrayTareas.map(tareaObj=>{
        `<div id="tareita">
            <input type="checkbox" id="tarea${arrayTareas[i].id}">
            <p> 
                ${arrayTareas[i].titulo}
            </p>
        </div>`)
    }
}
var contador=0
const funcHacerObjeto = nuevaTarea =>{
    contador++;
    let tareaObj={
        id:contador,
        titulo: nuevaTarea,
        fecha:Date.now(),
        fechaTachada:"",
        estaTachada:false
    }
    arrayTareas.push(tareaObj)
}