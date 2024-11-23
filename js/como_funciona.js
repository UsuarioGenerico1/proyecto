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


let currentIndex = 0;
const images = document.querySelectorAll('.imgBanner');
const totalImages = images.length;

function changeSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; 
    }
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}
// Cambiar la imagen cada 3 segundos
setInterval(changeSlide, 3000);
