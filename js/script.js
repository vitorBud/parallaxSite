// Efeito de scroll suave para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Efeito de header que muda ao scrollar
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Animação de aparecimento das seções
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Elementos a serem observados
        const animatedElements = document.querySelectorAll('.hero-content, .about-text, .about-image, .service-card, .contact-form');
        animatedElements.forEach(el => observer.observe(el));

        // Efeito parallax adicional
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            // Ajusta a posição do background das seções com parallax
            document.querySelector('.hero').style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
            document.querySelector('.services').style.backgroundPositionY = -scrollPosition * 0.2 + 'px';

            // Efeito parallax melhorado
let lastScrollPosition = 0;
let ticking = false;

function updateParallax() {
    const scrollPosition = window.scrollY;
    const servicesSection = document.querySelector('.services');
    const servicesOffset = servicesSection.offsetTop;
    const windowHeight = window.innerHeight;
    
    // Aplica parallax apenas quando a seção está visível
    if (scrollPosition + windowHeight > servicesOffset && 
        scrollPosition < servicesOffset + servicesSection.offsetHeight) {
        
        const parallaxOffset = (scrollPosition - servicesOffset) * 0.3;
        servicesSection.style.backgroundPositionY = `${parallaxOffset}px`;
    }
    
    lastScrollPosition = scrollPosition;
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
    
    // Código existente para o header
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Restante do seu código JavaScript existente...
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.hero-content, .about-text, .about-image, .service-card, .contact-form');
animatedElements.forEach(el => observer.observe(el));
        });

        

