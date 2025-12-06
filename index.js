// Animation au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Animation des sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'all 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Animation des dots de compétences
    const dots = document.querySelectorAll('.dot.active');
    dots.forEach((dot, index) => {
        setTimeout(() => {
            dot.style.transform = 'scale(1.2)';
            setTimeout(() => {
                dot.style.transform = 'scale(1)';
            }, 200);
        }, index * 50);
    });
});