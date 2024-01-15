document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para el enlace Zafiro
    var zafiroLink = document.getElementById('zafiro-link');
    zafiroLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://server.pro/27337911';
    });

    // Animación del título
    const headerTitle = document.querySelector('header h1');
    let colorChange = true;
    setInterval(() => {
        headerTitle.style.color = colorChange ? '#81c784' : 'white';
        colorChange = !colorChange;
    }, 1000);

    // Funcionalidad del slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.querySelector('.prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        moveSlide(1);
    });

    function moveSlide(step) {
        slideIndex = (slideIndex + step + totalSlides) % totalSlides;
        const slideWidth = slides[0].clientWidth;
        document.querySelector('.slides').style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
    }

    setInterval(function() {
        moveSlide(1);
    }, 3000); // Cambia este valor para ajustar la velocidad del slider automático
});
