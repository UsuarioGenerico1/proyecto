function ventanaModal(encabezado, mensaje) {
    // fondo oscuro (overlay)
    let overlay = document.createElement("div");
    overlay.className = "overlay";

    // contenedor del modal
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";
    contenedor.id = "contenedor";

    // título
    let titulo = document.createElement("h2");
    titulo.className = "titulo";
    titulo.textContent = encabezado;

    // contenido
    let contenido = document.createElement("p");
    contenido.className = "contenido";
    contenido.textContent = mensaje;

    // botón de cierre
    let btnCerrar = document.createElement("button");
    btnCerrar.className = "btn-cerrar";
    btnCerrar.textContent = "Cerrar";
    btnCerrar.onclick = function () {
        document.body.removeChild(overlay);
    };

    contenedor.appendChild(titulo);
    contenedor.appendChild(contenido);
    contenedor.appendChild(btnCerrar);

    overlay.appendChild(contenedor);
    document.body.appendChild(overlay);
}


let index = 0;
let imagenes = document.querySelectorAll('.imgBanner');
let totalImagenes = imagenes.length;

function cambiarSlide() {
    index++;
    if (index >= totalImagenes) {
        index = 0; 
    }
    let valor = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${valor}%)`;
}
// Cambiar la imagen cada 3 segundos
setInterval(cambiarSlide, 3000);
