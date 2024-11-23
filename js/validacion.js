
function validarForm() {
    const fechaOrden = document.getElementById("fecha-orden").value;
    const idOrden = document.getElementById("id-orden").value;
    const cantidadPagada = document.getElementById("cantidad-pagada").value;
    const fechaPago = document.getElementById("fecha-pago").value;
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const correo = document.getElementById("correo").value.trim();
    
    if (!fechaOrden || !idOrden || !cantidadPagada || !fechaPago || !nombre || !apellido || !correo) {
        alert("Por favor, todos los campos son necesarios y obligatorios.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
        alert("Corre electrónico inválido.");
        return false;
    }

    if (isNaN(cantidadPagada) || cantidadPagada <= 0) {
        alert("La cantidad pagada debe ser un número positivo.");
        return false;
    }

    if (celular && !/^\d{10}$/.test(celular)) {
        alert("El celular debe tener 10 dígitos.");
        return false;
    }

    return true;
}