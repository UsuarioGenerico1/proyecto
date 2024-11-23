let validar = true;
function validarFormulario(){
    eliminarMensajes();
    let esValido = true;
    let titulo = document.getElementById("titulo");
    let descripcion = document.getElementById("descripcion");
    let precio = document.getElementById("precio");
    let oficios = document.querySelector(".estados");
    let ofertas = document.querySelector('input[name="oferta"]:checked');
    let errorOferta = document.querySelector(".errorOferta"); 
    
    //Validar Titulo
    if (titulo.value === ""|| titulo.value.length < 3 ) {
        mensajeError("nombre es requerido",titulo);
        esValido =false;
    }
    if(descripcion.value===""){
        mensajeError("agrege una descripcion",descripcion);
        esValido=false;
    }

    //validar Precio
    const regexPrecio = /^[0-9]+$/;
    if(!regexPrecio.test(precio.value)||precio.value===""){
       mensajeError("ingrese un valor valido(numeros)",precio);
       esValido=false;
    }
    //valdiar oficio
    if(oficios.value===""){      
        mensajeError("seleccione una opcion",oficios);
        esValido=false;
    }
       
    if(!ofertas){
        errorOferta.style.display='block';
        errorOferta.textContent="escoja";
        errorOferta.style.color = "red";
        errorOferta.style.fontSize = "9pt"
        esValido=false;
    }else{
        errorOferta.style.display='none';
    }
    //fecha
    if(fechaDiv.style.display !== "none" && fecha.value === ""){
        mensajeError("seleccione una fecha valida",fecha);
        esValido=false;
    }

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

function validarFecha(fecha,fechaSelect,form,elemento){
    form.addEventListener('submit',function(){
        if(fechaSelect<fecha){
            mensajeError("seleccione una fecha valida",elemento);
        }else{
            alert("no hay nada");
        }
    })
}
//comprueba si el radio button esta marcada o no para mostrar la fecha
let ofertaRadios = document.querySelectorAll('input[name="oferta"]');
let fechaDiv = document.querySelector('.fecha');
let fecha = document.getElementById("fecha");
let form = document.getElementById("formulario");
let btnCancelar = document.getElementById('cancelar');
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

btnCancelar.addEventListener('click',function(){
    fechaDiv.style.display = "none";
});

