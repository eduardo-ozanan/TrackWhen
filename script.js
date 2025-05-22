document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Mobile menu toggle
    if (mobileMenuToggle && navMenu) {
        // Make sure event handlers are properly attached
        mobileMenuToggle.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            navMenu.classList.toggle('show');
        });
        
        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.menu-container') && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    }

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

// Add a mobile-specific fallback fix
window.addEventListener('load', function() {
    // Apply direct styles if needed
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768 && mobileMenuToggle && navMenu) {
        // Force apply initial styles
        navMenu.style.display = 'none';
        
        mobileMenuToggle.onclick = function(event) {
            event.stopPropagation();
            if (navMenu.style.display === 'none') {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
            } else {
                navMenu.style.display = 'none';
            }
        };
    }
});
