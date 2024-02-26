document.addEventListener("DOMContentLoaded", function() {
    const nombreInput = document.getElementById("nombre");
    const submitButton = document.getElementById("submitButton");
    const mensajeBienvenida = document.getElementById("mensaje_b");
    const error = document.getElementById('Error');
    const error2 = document.getElementById('Error2');
    const submitTarea = document.getElementById("submitTarea");
    const listaTareas = document.getElementById("listaTareas");         
    const boton = document.getElementById('submitTarea');
    const botona = document.getElementById('submitButton');
    

    boton.addEventListener('mouseover', function() {
        boton.classList.add('hover'); 
      });
      
      boton.addEventListener('mouseout', function() {
        boton.classList.remove('hover'); 
      });
      botona.addEventListener('mouseover', function() {
        botona.classList.add('hover');
      });
      
      botona.addEventListener('mouseout', function() {
        botona.classList.remove('hover'); 
      });
    submitButton.addEventListener("click", function() {
    const nombre = nombreInput.value.trim();
        if (nombre !== "") {
            mensajeBienvenida.textContent = "Hola " + nombre;
            document.getElementById("contenidoInicial").style.display = "none";
            document.getElementById("contenidoTodos").style.display = "block";
        } else {
            error.style.display = 'block';
            nombreInput.style.borderColor="red";
            nombreInput.style.color="rgb(240, 184, 184)";
        }
    });

    submitTarea.addEventListener("click", function() {
        const tareaInput = document.getElementById("tareaa");
        const tarea = tareaInput.value.trim();
        if (tarea !== "") {

            const contenedorTarea = document.createElement("div");
            contenedorTarea.classList.add("tarea-contenedor", "d-flex");
            

            const bandera = document.createElement("span");
            bandera.classList.add("badge", "bg-warning-subtle", "text-dark-emphasis", "mb-4");
            bandera.textContent = tarea;
            bandera.style.width="80vw";
            bandera.style.height="7vh";
            bandera.style.alignContent = "flex-start";
            const nuevoBoton = document.createElement("button");
            const svgIcona = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcona.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcona.setAttribute("width", "16");
        svgIcona.setAttribute("height", "16");
        svgIcona.setAttribute("fill", "currentColor");
        svgIcona.setAttribute("class", "bi bi-x");
        svgIcona.setAttribute("viewBox", "0 0 16 16");
        const patha = document.createElementNS("http://www.w3.org/2000/svg", "path");
        patha.setAttribute("d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708");
        svgIcona.appendChild(patha);
        nuevoBoton.appendChild(svgIcona);
        nuevoBoton.setAttribute("width", "16");
        nuevoBoton.setAttribute("height", "16");
        bandera.textContent = tarea;
        bandera.style.width="80vw";
        nuevoBoton.classList.add("btn", "btn-danger", "ms-2");
        nuevoBoton.addEventListener("click", function() {
        listaTareas.removeChild(contenedorTarea);
    });

    const cambiarTextoBoton = document.createElement("button");
    cambiarTextoBoton.classList.add("btn", "btn-primary");
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("width", "16");
    svgIcon.setAttribute("height", "16");
    svgIcon.setAttribute("fill", "currentColor");
    svgIcon.setAttribute("class", "bi bi-cursor-text");
    svgIcon.setAttribute("viewBox", "0 0 16 16");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.17 4.17 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.17 4.17 0 0 1-2.06-.566A5 5 0 0 1 8 13.65a5 5 0 0 1-.44.285 4.17 4.17 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.5 3.5 0 0 0-.436-.294A3.17 3.17 0 0 0 5.5 2.5.5.5 0 0 1 5 2m2.648 10.645");
    svgIcon.appendChild(path);
    cambiarTextoBoton.appendChild(svgIcon);
    cambiarTextoBoton.setAttribute("width", "16");
    cambiarTextoBoton.setAttribute("height", "16");
    cambiarTextoBoton.style.marginLeft="5px";
    cambiarTextoBoton.style.marginRight="5px";
    cambiarTextoBoton.addEventListener("click", function() {

    const nuevoTexto = prompt("Ingrese el nuevo texto para la bandera:");
    if (nuevoTexto !== null) {

        bandera.textContent = nuevoTexto;
        bandera.appendChild(cambiarColorBtn);
        bandera.appendChild(cambiarTextoBoton);
        bandera.appendChild(nuevoBoton);
        bandera.appendChild(tacharBoton);
    }
    });

    const tacharBoton = document.createElement("button");
    tacharBoton.classList.add("btn", "btn-success", "ms-2");
    const svgIcon3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon3.setAttribute("width", "16");
    svgIcon3.setAttribute("height", "16");
    svgIcon3.setAttribute("fill", "currentColor");
    svgIcon3.setAttribute("class", "bi bi-check-lg");
    svgIcon3.setAttribute("viewBox", "0 0 16 16");
    const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z");
    svgIcon3.appendChild(path3);
    tacharBoton.appendChild(svgIcon3);
    tacharBoton.setAttribute("width", "16");
    tacharBoton.setAttribute("height", "16");
    tacharBoton.addEventListener("click", function() {
    bandera.style.textDecoration = "line-through";
    bandera.classList.add("bg-warning-subtle");
    bandera.classList.remove(...colores);
    bandera.classList.add("bg-success-subtle");
});
const cambiarColorBtn =document.createElement("button");
    cambiarColorBtn.classList.add("btn", "btn-secondary", "ms-2");
    const svgIcon4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon4.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon4.setAttribute("width", "16");
    svgIcon4.setAttribute("height", "16");
    svgIcon4.setAttribute("fill", "currentColor");
    svgIcon4.setAttribute("class", "bi bi-circle");
    svgIcon4.setAttribute("viewBox", "0 0 16 16");
    const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path4.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16");
    svgIcon4.appendChild(path4);
    cambiarColorBtn.appendChild(svgIcon4);
    cambiarColorBtn.setAttribute("width", "16");
    cambiarColorBtn.setAttribute("height", "16");
    const colores = ["bg-secondary-subtle", "bg-success-subtle", "bg-danger-subtle", "bg-warning-subtle", "bg-info-subtle", "bg-light-subtle", "bg-dark-subtle"];
    cambiarColorBtn.addEventListener("click", function() {
        bandera.classList.add("bg-warning-subtle");
        bandera.classList.remove(...colores);
        const randomIndex = Math.floor(Math.random() * colores.length);
        const randomColorClass = colores[randomIndex];
        bandera.classList.add(randomColorClass);
});
            bandera.appendChild(cambiarColorBtn);
            bandera.appendChild(cambiarTextoBoton);
            bandera.appendChild(nuevoBoton);
            bandera.appendChild(tacharBoton);
                
        contenedorTarea.appendChild(bandera);
        listaTareas.appendChild(contenedorTarea);
        
        
        listaTareas.appendChild(document.createTextNode(" "));
        tareaInput.value = "";
        tareaInput.placeholder = "Ingresa tu tarea";
        
        tareaInput.style.borderColor="black";
        error2.style.display = 'none';


        }
        else{
            error2.style.display = 'block';
            tareaInput.style.borderColor="red";
            
        }
    });
    

    

});
