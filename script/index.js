document.addEventListener('DOMContentLoaded', () => {
    // ---- Formulario de contacto ----
    const contactForm = document.getElementById('form-contacto');
    const responseMessage = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevenir el envío tradicional de HTML

            const preparatoriaEl = document.getElementById('preparatoria');

            // Captura de datos (por si deseas conectarlo a una API)
            const formData = {
                nombre: document.getElementById('nombre').value,
                correo: document.getElementById('correo').value,
                telefono: document.getElementById('telefono').value,
                preparatoria: preparatoriaEl ? preparatoriaEl.value : '',
                mensaje: document.getElementById('mensaje').value
            };

            console.log('Datos listos para enviar:', formData);

            // Simulación de respuesta de backend exitosa
            responseMessage.textContent = `¡Gracias por tu interés, ${formData.nombre}! Hemos recibido tu solicitud. Pronto nos comunicaremos contigo al correo ${formData.correo}.`;
            responseMessage.className = 'hidden-message success';

            // Limpiar el formulario
            contactForm.reset();
        });
    }

    // ---- Carrusel automático (Noticias) ----
    const carrucel = document.getElementById('auto-carrucel');

    if (carrucel) {
        const slides = carrucel.querySelectorAll('.stack');
        let currentIndex = 0;
        const intervalMs = 4000;

        const goToSlide = (index) => {
            if (!slides.length) return;
            const slide = slides[index];
            carrucel.scrollTo({
                left: slide.offsetLeft,
                behavior: 'smooth'
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        };

        let autoplay = setInterval(nextSlide, intervalMs);

        // Pausar el autoplay cuando el usuario interactúa manualmente
        const pauseAutoplay = () => clearInterval(autoplay);
        const resumeAutoplay = () => {
            clearInterval(autoplay);
            autoplay = setInterval(nextSlide, intervalMs);
        };

        carrucel.addEventListener('mouseenter', pauseAutoplay);
        carrucel.addEventListener('mouseleave', resumeAutoplay);
        carrucel.addEventListener('touchstart', pauseAutoplay, { passive: true });
        carrucel.addEventListener('touchend', resumeAutoplay, { passive: true });
    }
});
