document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    // Referencias a elementos del formulario
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const tipoUsuarioSelect = document.getElementById('tipoUsuario');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const terminosCheck = document.getElementById('terminos');

    // Referencias a mensajes de error
    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const telefonoError = document.getElementById('telefonoError');
    const tipoUsuarioError = document.getElementById('tipoUsuarioError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const terminosError = document.getElementById('terminosError');

    // Funciones de validación
    const validarNombre = (nombre) => {
        return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/.test(nombre);
    };

    const validarEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validarTelefono = (telefono) => {
        return /^[0-9]{10}$/.test(telefono);
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
    nombreInput.addEventListener('input', () => {
        if (!validarNombre(nombreInput.value)) {
            mostrarError(nombreError, 'Ingrese un nombre válido (solo letras y espacios, mínimo 3 caracteres)');
            nombreInput.style.borderColor = '#ff0000';
        } else {
            ocultarError(nombreError);
            nombreInput.style.borderColor = '#4CAF50';
        }
    });

    emailInput.addEventListener('input', () => {
        if (!validarEmail(emailInput.value)) {
            mostrarError(emailError, 'Ingrese un email válido');
            emailInput.style.borderColor = '#ff0000';
        } else {
            ocultarError(emailError);
            emailInput.style.borderColor = '#4CAF50';
        }
    });

    telefonoInput.addEventListener('input', () => {
        if (!validarTelefono(telefonoInput.value)) {
            mostrarError(telefonoError, 'Ingrese un número de teléfono válido (10 dígitos)');
            telefonoInput.style.borderColor = '#ff0000';
        } else {
            ocultarError(telefonoError);
            telefonoInput.style.borderColor = '#4CAF50';
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

    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value !== passwordInput.value) {
            mostrarError(confirmPasswordError, 'Las contraseñas no coinciden');
            confirmPasswordInput.style.borderColor = '#ff0000';
        } else {
            ocultarError(confirmPasswordError);
            confirmPasswordInput.style.borderColor = '#4CAF50';
        }
    });

    // Función para guardar usuario
    const guardarUsuario = (usuario) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    };

    // Validación del formulario al enviar
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let esValido = true;

        // Validar todos los campos
        if (!validarNombre(nombreInput.value)) {
            mostrarError(nombreError, 'Nombre inválido');
            nombreInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        if (!validarEmail(emailInput.value)) {
            mostrarError(emailError, 'Email inválido');
            emailInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        if (!validarTelefono(telefonoInput.value)) {
            mostrarError(telefonoError, 'Teléfono inválido');
            telefonoInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        if (!tipoUsuarioSelect.value) {
            mostrarError(tipoUsuarioError, 'Seleccione un tipo de usuario');
            tipoUsuarioSelect.style.borderColor = '#ff0000';
            esValido = false;
        }

        if (!validarPassword(passwordInput.value)) {
            mostrarError(passwordError, 'Contraseña inválida');
            passwordInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        if (confirmPasswordInput.value !== passwordInput.value) {
            mostrarError(confirmPasswordError, 'Las contraseñas no coinciden');
            confirmPasswordInput.style.borderColor = '#ff0000';
            esValido = false;
        }

        // Validar selección de términos
        if (!terminosCheck.checked) {
            mostrarError(terminosError, 'Debe aceptar los términos y condiciones');
            esValido = false;
        }

        if (esValido) {
            // Crear objeto de usuario
            const nuevoUsuario = {
                nombre: nombreInput.value,
                email: emailInput.value,
                telefono: telefonoInput.value,
                tipoUsuario: tipoUsuarioSelect.value,
                password: passwordInput.value
            };

            // Guardar usuario
            guardarUsuario(nuevoUsuario);
            
            alert('Registro exitoso. Ahora puede iniciar sesión.');
            window.location.href = 'login.html';
        }
    });
});