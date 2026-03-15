/**
 * app.js
 * Lógica principal de la plataforma "Relámpagos del Catatumbo"
 * Arquitectura modular para fácil escalabilidad.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Paso 1: Inicializar el efecto visual principal
    inicializarRelampagoOrganico();

    // Paso 2: Configurar la interactividad del usuario
    configurarNavegacionElegante();
});

/**
 * PASO 1: Lógica del Efecto Catatumbo
 * Reemplaza la animación CSS estática con un generador aleatorio 
 * para simular la naturaleza impredecible de los relámpagos.
 */
function inicializarRelampagoOrganico() {
    const header = document.querySelector('header');
    if (!header) return;

    // Evaluamos la posibilidad de un relámpago cada 1.5 segundos
    setInterval(() => {
        // 30% de probabilidad de que ocurra un destello en este ciclo
        const ocurreDestello = Math.random() > 0.7; 

        if (ocurreDestello) {
            // Generar el brillo intenso que ilumina el "camino"
            header.style.boxShadow = '0 0 100px rgba(0, 119, 255, 0.8)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            
            // Apagar el destello rápidamente (simulando la velocidad de la luz)
            setTimeout(() => {
                header.style.boxShadow = 'none';
                header.style.backgroundColor = 'transparent';
            }, 150); // Duración en milisegundos
        }
    }, 1500);
}

/**
 * PASO 2: Control de Navegación y Menús Desplegables
 * Garantiza que la experiencia sea fluida tanto en PC como en dispositivos móviles.
 */
function configurarNavegacionElegante() {
    const dropdownButton = document.querySelector('.dropdown button');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (!dropdownButton || !dropdownContent) return;

    // Permite que el menú funcione con clics en pantallas táctiles
    dropdownButton.addEventListener('click', (evento) => {
        evento.stopPropagation();
        const estaVisible = dropdownContent.style.display === 'block';
        dropdownContent.style.display = estaVisible ? 'none' : 'block';
    });

    // Cierra el menú elegantemente si el usuario hace clic en cualquier otra parte de la página
    document.addEventListener('click', () => {
        dropdownContent.style.display = 'none';
    });

    // Añade un desplazamiento suave (smooth scroll) para cualquier ancla interna
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * PASO 3: Gestión del Formulario de Unidad
 * Captura los datos de los voluntarios de manera segura.
 */
const formulario = document.getElementById('registroForm');
if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulación de procesamiento seguro
        const datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('correo').value,
            area: document.getElementById('especialidad').value,
            fecha: new Date().toISOString()
        };

        console.log("Registro captado:", datos);
        
        // Feedback visual elegante
        formulario.style.display = 'none';
        document.getElementById('mensajeExito').style.display = 'block';
    });
}
