// ============================================
// BREW HAVEN - JAVASCRIPT
// ============================================

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle menu visibility
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close menu when a link is clicked
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
if (mobileMenuLinks) {
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    }
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields!');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        // Log form data (in a real app, this would be sent to a server)
        console.log('Form Submitted:', {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date().toLocaleString()
        });

        // Show success message
        if (successMessage) {
            successMessage.classList.remove('hidden');
            successMessage.style.animation = 'fadeIn 0.5s ease-out';

            // Reset form
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.classList.add('hidden');
            }, 5000);
        }

        // Scroll to success message
        if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// NAVBAR ACTIVE LINK HIGHLIGHTING
// ============================================

function highlightActiveLink() {
    const currentLocation = location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('nav a');

    menuItems.forEach(item => {
        const link = item.getAttribute('href');
        if (link === currentLocation || (currentLocation === '' && link === 'index.html')) {
            item.classList.add('text-amber-700', 'font-bold');
        } else {
            item.classList.remove('text-amber-700', 'font-bold');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', highlightActiveLink);

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// ============================================
// HERO SECTION TYPING EFFECT (Optional)
// ============================================

function typewriterEffect(element, text, speed = 50) {
    let index = 0;
    element.innerHTML = '';

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ============================================
// MENU ITEM HOVER EFFECTS
// ============================================

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// GALLERY IMAGE ZOOM EFFECT
// ============================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// NEWSLETTER SUBSCRIPTION
// ============================================

const newsletterForm = document.querySelector('form[type="email"]');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing! Check your email for confirmation.');
            this.reset();
        }
    });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// ============================================
// PERFORMANCE: DEBOUNCE FUNCTION
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'fixed bottom-8 right-8 bg-amber-800 hover:bg-amber-900 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hidden z-40 transition-all hover:scale-110';
scrollTopBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', debounce(() => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
}, 100));

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// UTILITY: LOG PERFORMANCE METRICS
// ============================================

function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const timings = window.performance.timing;
        const loadTime = timings.loadEventEnd - timings.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
}

window.addEventListener('load', logPerformanceMetrics);

// ============================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Skip navigation with keyboard shortcut (Alt + S)
    if (e.altKey && e.key === 's') {
        const mainContent = document.querySelector('main') || document.querySelector('section');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Close mobile menu with Escape
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});

// ============================================
// INITIALIZATION
// ============================================

console.log('Brew Haven - JavaScript loaded successfully!');
console.log('Version: 1.0.0');
console.log('Last Updated: 2026-01-30');
