function validarFormulario(){
    eliminarMensajes();
    let esValido = true;
    let titulo = document.getElementById("titulo");
    let precio = document.getElementById("precio");
    let oficios = document.querySelector(".estados");
    let fecha = document.getElementById("fecha");
    let ofertas = document.querySelector('input[name="oferta"]:checked');
    

    
    //Validar Titulo
    if (titulo.value === ""|| titulo.value.length < 3 ) {
        mensajeError("nombre es requerido",titulo);
        esValido =false;
    }
   

    //validar Precio
    const regexPrecio = /^[0-9]+$/;
    if(!regexPrecio.test(precio.value)||precio.value===""){
        alert("solo numeros");
    }
    //valdiar oficio
    if(oficios.value===""){
        alert("estado requerido");
        esValido=false;
    }
    //validar oferta
    if(ofertas){
        alert(ofertas.value);

    }


    //validar Fecha
    let fechaActual = new Date();
    let fechaSeleccionada = new Date(fecha.value);
    return esValido;
}

//mensaje de error
function mensajeError(mensaje,elemento){
    elemento.focus();
    let spam = document.createElement("span");
    spam.textContent = mensaje;
    spam.style.fontSize = "9pt";
    spam.style.color = "red";
    spam.classList.add("error");
    elemento.parentNode.appendChild(spam);
}
function eliminarMensajes(){
    let obtenerSpam = document.querySelectorAll(".error");
    for(let i=0; i<obtenerSpam.length;i++){
        obtenerSpam[i].remove();
    }
}

/*
document.addEventListener("DOMContentLoaded", () => {
    const ofertaRadios = document.querySelectorAll('input[name="oferta"]');
    const fechaDiv = document.querySelector('.fecha');
    ofertaRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.value === "si" && radio.checked) {
                fechaDiv.style.display = "block";
            } else if (radio.value === "no" && radio.checked) {
                fechaDiv.style.display = "none";
            }
        });
    });
    document.querySelector('input[name="oferta"][value="no"]').checked = true;
    fechaDiv.style.display = "none";
});*/
