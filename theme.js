// // Theme customization and dark mode functionality
// document.addEventListener('DOMContentLoaded', function() {
//     // Check for saved theme preference or use preferred color scheme
//     const savedTheme = localStorage.getItem('theme') || 
//                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
//     // Apply the theme on initial load
//     document.documentElement.setAttribute('data-theme', savedTheme);
    
//     // Create theme toggle button in the navbar
//     const navContent = document.querySelector('.nav-content');
//     const themeToggle = document.createElement('div');
//     themeToggle.classList.add('theme-toggle');
//     themeToggle.innerHTML = `
//         <button id="themeButton" aria-label="Toggle Dark Mode">
//             <i class="fas ${savedTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
//         </button>
//     `;
    
//     navContent.appendChild(themeToggle);
    
//     // Add event listener to toggle theme
//     const themeButton = document.getElementById('themeButton');
//     themeButton.addEventListener('click', function() {
//         const currentTheme = document.documentElement.getAttribute('data-theme');
//         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
//         // Save to local storage
//         localStorage.setItem('theme', newTheme);
        
//         // Apply the new theme
//         document.documentElement.setAttribute('data-theme', newTheme);
        
//         // Update button icon
//         const icon = themeButton.querySelector('i');
//         icon.classList.remove(newTheme === 'dark' ? 'fa-moon' : 'fa-sun');
//         icon.classList.add(newTheme === 'dark' ? 'fa-sun' : 'fa-moon');
//     });
    
//     // Add CSS variables for dark mode
//     const style = document.createElement('style');
//     style.textContent = `
//     :root {
//         --primary-color: #4a6cf7;
//         --secondary-color: #6b7c93;
//         --dark-color: #2d3748;
//         --light-color: #f8fafc;
//         --accent-color: #4fd1c5;
//         --gray-color: #e2e8f0;
//         --danger-color: #e53e3e;
//         --success-color: #38a169;
//         --text-color: #4a5568;
//         --heading-color: #2d3748;
//         --border-radius: 6px;
//         --transition: all 0.3s ease;
//         --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//         --bg-color: #ffffff;
//         --section-bg: #f8fafc;
//     }
    
//     [data-theme="dark"] {
//         --primary-color: #6b8eff;
//         --secondary-color: #a0aec0;
//         --dark-color: #1a202c;
//         --light-color: #f8fafc;
//         --accent-color: #4fd1c5;
//         --gray-color: #4a5568;
//         --text-color: #e2e8f0;
//         --heading-color: #f7fafc;
//         --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
//         --bg-color: #1a202c;
//         --section-bg: #2d3748;
//     }
    
//     [data-theme="dark"] body,
//     [data-theme="dark"] html,
//     [data-theme="dark"] main,
//     [data-theme="dark"] section {
//         background-color: var(--bg-color);
//         color: var(--text-color);
//     }
    
//     [data-theme="dark"] #navbar {
//         background: rgba(26, 32, 44, 0.95);
//     }
    
//     [data-theme="dark"] .logo a,
//     [data-theme="dark"] .nav-links li a {
//         color: var(--light-color);
//     }
    
//     [data-theme="dark"] .bar {
//         background: var(--light-color);
//     }
    
//     [data-theme="dark"] .section-container {
//         background-color: var(--section-bg);
//     }
    
//     [data-theme="dark"] .skill-category,
//     [data-theme="dark"] .timeline-content,
//     [data-theme="dark"] .contact-form,
//     [data-theme="dark"] .highlight,
//     [data-theme="dark"] .project-card,
//     [data-theme="dark"] .education-card,
//     [data-theme="dark"] .achievement-item {
//         background-color: var(--section-bg);
//         color: var(--text-color);
//     }
    
//     [data-theme="dark"] .form-group input, 
//     [data-theme="dark"] .form-group textarea {
//         background-color: #4a5568;
//         color: var(--light-color);
//         border-color: #718096;
//     }
    
//     [data-theme="dark"] .section-title,
//     [data-theme="dark"] h1, 
//     [data-theme="dark"] h2, 
//     [data-theme="dark"] h3, 
//     [data-theme="dark"] h4, 
//     [data-theme="dark"] h5, 
//     [data-theme="dark"] h6 {
//         color: var(--heading-color);
//     }
    
//     [data-theme="dark"] .about-content p,
//     [data-theme="dark"] .project-card p,
//     [data-theme="dark"] .education-card p,
//     [data-theme="dark"] .contact-text p {
//         color: var(--text-color);
//     }
    
//     [data-theme="dark"] footer {
//         background-color: var(--dark-color);
//         color: var(--light-color);
//     }
    
//     .theme-toggle {
//         margin-left: 15px;
//     }
    
//     .theme-toggle button {
//         background: none;
//         border: none;
//         cursor: pointer;
//         font-size: 1.2rem;
//         color: var(--primary-color);
//         width: 40px;
//         height: 40px;
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         transition: var(--transition);
//     }
    
//     .theme-toggle button:hover {
//         background-color: rgba(74, 108, 247, 0.1);
//     }
//         [data-theme="dark"] #navbar.scrolled {
//         background-color: rgba(26, 32, 44, 0.98) !important; /* Dark background with opacity */
//         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3) !important;
//     }
    
//     [data-theme="dark"] #navbar.scrolled .logo a,
//     [data-theme="dark"] #navbar.scrolled .nav-links li a {
//         color: var(--light-color) !important; /* Keep text light in dark mode */
//     }
    
//     [data-theme="dark"] #navbar.scrolled .bar {
//         background-color: var(--light-color) !important; /* Keep hamburger menu light */
//     }
    
// `;
    
//     document.head.appendChild(style);
// });
// // Add these stronger override rules to your theme toggle script
// document.addEventListener('scroll', function() {
//     if (document.documentElement.getAttribute('data-theme') === 'dark') {
//         const navbar = document.getElementById('navbar');
//         if (navbar.classList.contains('scrolled')) {
//             navbar.style.backgroundColor = 'rgba(26, 32, 44, 0.98)';
            
//             // Force logo and nav links to remain light-colored
//             const logoLink = navbar.querySelector('.logo a');
//             if (logoLink) logoLink.style.color = '#f8fafc';
            
//             const navLinks = navbar.querySelectorAll('.nav-links li a');
//             navLinks.forEach(link => {
//                 link.style.color = '#f8fafc';
//             });
            
//             const hamburgerBars = navbar.querySelectorAll('.bar');
//             hamburgerBars.forEach(bar => {
//                 bar.style.backgroundColor = '#f8fafc';
//             });
//         }
//     }
// });