// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Raduni Management System (only on home page)
const raduniNumber = document.getElementById('raduniNumber');

if (raduniNumber) {
    const registraBtn = document.getElementById('registraBtn');

    // Funzione per gestire il numero di raduni
    function updateRaduniStatus(number) {
        // Salva il numero nel localStorage
        localStorage.setItem('raduniDisponibili', number);
        
        // Aggiorna il display
        raduniNumber.textContent = number;
        
        if (number > 0) {
            // Verde - Raduni disponibili
            raduniNumber.classList.remove('inactive');
            raduniNumber.classList.add('active');
            registraBtn.style.opacity = '1';
            registraBtn.style.cursor = 'pointer';
            registraBtn.style.pointerEvents = 'auto';
        } else {
            // Rosso - Nessun raduno disponibile
            raduniNumber.classList.remove('active');
            raduniNumber.classList.add('inactive');
            registraBtn.style.opacity = '0.5';
            registraBtn.style.cursor = 'not-allowed';
            registraBtn.style.pointerEvents = 'none';
        }
    }

    // Carica i dati dal localStorage o imposta un valore di default
    window.addEventListener('load', () => {
        localStorage.setItem('raduniDisponibili', '1');
        updateRaduniStatus(1);
    });

    // Funzione globale per modificare i raduni (usa nella console)
    window.setRaduni = function(num) {
        updateRaduniStatus(num);
        console.log(`Raduni impostati a: ${num}`);
    };
}

// Add animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Gallery click animation (placeholder for future image loading)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // This could be enhanced to open a lightbox or modal in the future
        console.log('Gallery item clicked');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and highlights
document.querySelectorAll('.card, .highlight-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add fadeInUp animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInStyle);

// Vota Luogo Button
const votaLuogoBtn = document.getElementById('vota-luogo-btn');
if (votaLuogoBtn) {
    votaLuogoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://form.jotform.com/252764158929067', '_blank');
    });
}

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 50);
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(current);
    }, 50);
}

// Initialize
console.log('Raduni Jack Russell Catania - Website loaded');
