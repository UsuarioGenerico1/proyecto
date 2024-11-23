
const preguntas = document.querySelectorAll('.lista1, .lista2, .lista3, .lista4, .lista5');
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', function() {
        const respuesta = this.querySelector('p');
        respuesta.style.display = respuesta.style.display === 'none' ? 'block' : 'none';
    });
});