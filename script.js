const apiUrl = '/api/data'; // Define the API endpoint

// Fetch data from the backend API
fetch(apiUrl)

    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // You can update the UI with the data here
    })
    .catch(error => console.error('Error fetching data:', error));

// Existing script content can be added here if needed
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('contactForm');
    
    // Scroll event for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'white';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = document.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                if (!section.classList.contains('fade-in')) {
                    section.classList.add('fade-in');
                }
            }
        });
        
        // Animate skill bars
        // const skillBars = document.querySelectorAll('.skill-level');
        // skillBars.forEach(bar => {
        //     const barTop = bar.getBoundingClientRect().top;
            
        //     if (barTop < triggerBottom) {
        //         const width = bar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
        //         bar.style.width = '0%';
        //         setTimeout(() => {
        //             bar.style.transition = 'width 1s ease-in-out';
        //             bar.style.width = width + '%';
        //         }, 200);
        //     }
        // });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial animation on page load
    setTimeout(animateOnScroll, 500);
    
    // Contact form submission (for demonstration)
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields.');
                return;
            }
            
            // Show success message (in a real scenario, you would send data to a server)
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Typed.js effect for hero section
    const heroText = document.querySelector('.hero-content h1');
    if (heroText) {
        const originalText = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // Project filtering functionality (can be expanded)
    const projectCards = document.querySelectorAll('.project-card');
    
    function filterProjects(category) {
        projectCards.forEach(card => {
            const tags = card.querySelector('.project-tags').textContent.toLowerCase();
            
            if (category === 'all' || tags.includes(category.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // ScrollReveal animation (alternative to custom scroll animation)
    function initScrollReveal() {
        // Animate elements with class names
        const animateElements = [
            { selector: '.about-text', animation: 'slide-up', delay: 300 },
            { selector: '.skills-container', animation: 'fade-in', delay: 400 },
            { selector: '.project-card', animation: 'slide-up', delay: 300 },
            { selector: '.timeline-item', animation: 'slide-right', delay: 300 },
            { selector: '.education-card', animation: 'slide-up', delay: 300 },
            { selector: '.publication-card', animation: 'fade-in', delay: 300 },
            { selector: '.achievement-item', animation: 'slide-right', delay: 300 },
            { selector: '.contact-info, .contact-form', animation: 'slide-up', delay: 300 }
        ];
        
        animateElements.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add(item.animation);
                }, item.delay + (index * 100));
            });
        });
    }
    
    // Run ScrollReveal animation
    setTimeout(initScrollReveal, 500);
});

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Hero Text Animation
    gsap.to(".hero-content h1", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.to(".hero-content p", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
    });

    gsap.from(".hero-buttons a", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.8
    });

    // Scroll Down Indicator Fade In
    gsap.to(".scroll-down", {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.2
    });

    // Parallax Effect on Scroll
    gsap.to(".hero-content", {
        yPercent: -10,
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            scrub: 1
        }
    });
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send to Formspree - Replace with your form ID
            fetch('https://formspree.io/f/myzeydjz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Success message
                showMessage('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            })
            .catch(error => {
                // Error message
                showMessage('Oops! There was a problem sending your message.', 'error');
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
    
    // Function to show message
    function showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        
        // Add to DOM after the form
        contactForm.parentNode.insertBefore(messageEl, contactForm.nextSibling);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
});

