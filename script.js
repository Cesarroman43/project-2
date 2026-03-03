/* ======================================================
   ESTILO: LUXURY KINETICS - MyStudyJourney
   ====================================================== */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CURSOR PERSONALIZADO
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const links = document.querySelectorAll('a, button, video, .gallery-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    // 2. REVELACIÓN CINÉTICA (Intersection Observer)
    const luxuryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                if (entry.target.tagName === 'VIDEO') {
                    entry.target.pause(); // Pausa si dejas de verlo
                }
            }
        });
    }, { threshold: 0.1 });

    // Aplicamos la clase de revelación a los elementos
    const targets = document.querySelectorAll('section, .gallery-item, video, h1, h2, .ethos-item, main p');
    targets.forEach(el => {
        el.classList.add('reveal-element');
        luxuryObserver.observe(el);
    });

    // 3. BARRA DE PROGRESO
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";

        // Navbar Efecto
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
});
