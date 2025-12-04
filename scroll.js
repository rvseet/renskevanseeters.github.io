// Fade-in voor basis secties
ScrollReveal().reveal('.hero, .about, .projects', {
    duration: 900,
    distance: '40px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 200
});

// Project cards stagger effect
ScrollReveal().reveal('.project-card', {
    duration: 900,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    interval: 150,
    easing: 'ease-out'
});

// About foto animatie
ScrollReveal().reveal('.about-photo', {
    duration: 1000,
    distance: '60px',
    origin: 'right',
    opacity: 0,
    easing: 'ease-out'
});

// Titels minimal slide
ScrollReveal().reveal('h1', {
    duration: 900,
    distance: '20px',
    origin: 'bottom',
    easing: 'ease-out'
});
