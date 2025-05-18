document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    // Function to update active menu item
    const updateActiveMenu = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    // Set initial active state
    updateActiveMenu();

    // Update on scroll
    window.addEventListener('scroll', updateActiveMenu);

    // Handle click events
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
