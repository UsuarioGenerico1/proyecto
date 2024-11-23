document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    // Referencias a elementos del formulario
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const tipoAccesoSelect = document.getElementById('tipoAcceso');
    const preguntaSeguridadInput = document.getElementById('preguntaSeguridad');
    const notificacionesRadios = document.getElementsByName('notificaciones');
    
    // Referencias a mensajes de error
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const tipoAccesoError = document.getElementById('tipoAccesoError');
    const notificacionesError = document.getElementById('notificacionesError');
    const preguntaSeguridadError = document.getElementById('preguntaSeguridadError');

    // Funciones de validación
    const validarEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validarPassword = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    };

    // Función para mostrar error
    const mostrarError = (elemento, mensaje) => {
        elemento.style.display = 'block';
        elemento.textContent = mensaje;
        elemento.style.color = '#ff0000';
    };

    // Función para ocultar error
    const ocultarError = (elemento) => {
        elemento.style.display = 'none';
    };

    // Validaciones en tiempo real
    emailInput.addEventListener('input', () => {
        if (!validarEmail(emailInput.value)) {
            mostrarError(emailError, 'Ingrese un email válido');
            emailInput.style.borderColor = '#ff0000';
        } else {
            ocultarError(emailError);
            emailInput.style.borderColor = '#4CAF50';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (!validarPassword(passwordInput.value)) {
            mostrarError(passwordError, 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
            passwordInput.style.borderColor = '#ff0000';
        } else {
            ocultarError(passwordError);
            passwordInput.style.borderColor = '#4CAF50';
        }
    });

    tipoAccesoSelect.addEventListener('change', () => {
        if (!tipoAccesoSelect.value) {
            mostrarError(tipoAccesoError, 'Seleccione un tipo de acceso');
            tipoAccesoSelect.style.borderColor = '#ff0000';
        } else {
            ocultarError(tipoAccesoError);
            tipoAccesoSelect.style.borderColor = '#4CAF50';
        }
    });

    preguntaSeguridadInput.addEventListener('input', () => {
        if (preguntaSeguridadInput.value.length < 3) {
            mostrarError(preguntaSeguridadError, 'La respuesta debe tener al menos 3 caracteres');
            preguntaSeguridadInput.style.borderColor = '#ff0000';
        } else {
            ocultarError(preguntaSeguridadError);
            preguntaSeguridadInput.style.borderColor = '#4CAF50';
        }
    });

    // Función para verificar si un usuario está registrado
    const verificarCredenciales = (email, password, tipoAcceso) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        return usuarios.find(usuario => 
            usuario.email === email && 
            usuario.password === password && 
            usuario.tipoUsuario === tipoAcceso
        );
    };

    // Validación del formulario al enviar
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let esValido = true;

        // Validar email
        if (!validarEmail(emailInput.value)) {
            mostrarError(emailError, 'Email inválido');
            emailInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        // Validar contraseña
        if (!validarPassword(passwordInput.value)) {
            mostrarError(passwordError, 'Contraseña inválida');
            passwordInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        // Validar tipo de acceso
        if (!tipoAccesoSelect.value) {
            mostrarError(tipoAccesoError, 'Seleccione un tipo de acceso');
            tipoAccesoSelect.style.borderColor = '#ff0000';
            esValido = false;
        }

        // Validar notificaciones
        let notificacionSeleccionada = false;
        notificacionesRadios.forEach(radio => {
            if (radio.checked) notificacionSeleccionada = true;
        });
        if (!notificacionSeleccionada) {
            mostrarError(notificacionesError, 'Seleccione un tipo de notificación');
            esValido = false;
        }

        // Validar pregunta de seguridad
        if (preguntaSeguridadInput.value.length < 3) {
            mostrarError(preguntaSeguridadError, 'La respuesta debe tener al menos 3 caracteres');
            preguntaSeguridadInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        if (esValido) {
            const usuarioEncontrado = verificarCredenciales(
                emailInput.value,
                passwordInput.value,
                tipoAccesoSelect.value
            );

            if (usuarioEncontrado) {
                alert('Inicio de sesión exitoso');
                // Aquí podrías redirigir al usuario a su página de inicio
                window.location.href = 'home.html';
            } else {
                alert('Credenciales incorrectas');
            }
        }
    });
});