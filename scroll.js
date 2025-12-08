// Simple scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
        const rect = el.getBoundingClientRect().top;
        if (rect < trigger) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
