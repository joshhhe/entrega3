const input = document.getElementById("tareas");
const btn = document.querySelector("button");
const listatarea = document.getElementById("lista-tareas");

const agregarTarea = () =>{
    if(input.value){
        //crear tarea
        let newTarea = document.createElement("div");
        newTarea.classList.add("tarea")

        //texto inresado
        let msg = document.createElement("p");
        msg.innerText=input.value;
        newTarea.appendChild(msg);

        //crear y agregar contenedor de iconos 
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        newTarea.appendChild(iconos);


        //iconos

        let completar = document.createElement("i");
        completar.classList.add("bi","bi-check-circle-fill","icono-completar");
        completar.addEventListener("click",completarTarea);

        let eliminar = document.createElement("i");
        eliminar.classList.add("bi","bi-trash3-fill","icono-eliminar");
        eliminar.addEventListener("click",eliminarTarea);
        iconos.append(completar,eliminar);

        listatarea.appendChild(newTarea)


    }else{
        alert("ingresa una tarea")
    }
}




const completarTarea = (e)=>{ 
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada");
}

const eliminarTarea =(e)=>{
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}
btn.addEventListener("click",agregarTarea);

input.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        agregarTarea();
    }
})
 