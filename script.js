/* ======================================================
   ESTILO: LUXURY KINETICS - MyStudyJourney
   Propósito: Micro-interacciones de alta fidelidad
   ====================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. REVELACIÓN CINÉTICA (Smooth Slide-In)
    // Los elementos no solo aparecen, "aterrizan" con elegancia.
    const luxuryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
                entry.target.style.filter = "blur(0px)";
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Seleccionamos los elementos clave para animar
    const targets = document.querySelectorAll('section, figure, video, h1, h2, main p, footer');
    
    targets.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px) scale(0.98)"; // Empieza ligeramente más pequeño
        el.style.filter = "blur(10px)"; // Efecto de enfoque de lente
        el.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)"; // Curva de lujo (Ease Out Expo)
        luxuryObserver.observe(el);
    });

    // 2. NAVEGACIÓN MINIMALISTA (Efecto de Scroll Inteligente)
    const navbar = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Si bajamos, la barra se vuelve más compacta y traslúcida
        if (currentScroll > 80) {
            navbar.style.background = "rgba(255, 255, 255, 0.9)";
            navbar.style.backdropFilter = "blur(15px)";
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.03)";
            navbar.style.padding = "15px 0";
        } else {
            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";
            navbar.style.boxShadow = "none";
            navbar.style.padding = "30px 0";
        }
        lastScroll = currentScroll;
    });

    // 3. EFECTO HOVER EN IMÁGENES (Sutil Zoom)
    const profileImg = document.querySelector('figure img');
    if (profileImg) {
        profileImg.style.transition = "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)";
        profileImg.addEventListener('mouseenter', () => profileImg.style.transform = "scale(1.05)");
        profileImg.addEventListener('mouseleave', () => profileImg.style.transform = "scale(1)");
    }

    // Mensaje de elegancia en consola
    console.log("%c MyStudyJourney %c Luxury Interface Active ", 
                "color: #fdfbf7; background: #0d1b2a; padding: 5px 10px; font-family: serif; border-radius: 2px 0 0 2px;", 
                "color: #0d1b2a; background: #b8926a; padding: 5px 10px; font-style: italic; border-radius: 0 2px 2px 0;");
});