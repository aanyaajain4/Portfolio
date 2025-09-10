window.addEventListener('DOMContentLoaded', function () {
    // Navigation menu toggle for mobile
    var burger = document.querySelector('.burger');
    var navLinks = document.querySelector('.nav-links');
    if (burger && navLinks) {
        burger.addEventListener('click', function () {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
    // Add animation to profile image
    var heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.classList.add('animated-pic');
        heroImage.addEventListener('mouseenter', function () {
            heroImage.classList.add('animate-pulse');
        });
        heroImage.addEventListener('mouseleave', function () {
            heroImage.classList.remove('animate-pulse');
        });
    }
    // Add fade-in animation to sections when scrolled into view
    var animateSections = function () {
        var sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            var sectionTop = section.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    };
    // Initial check for elements in view
    animateSections();
    // Check on scroll
    window.addEventListener('scroll', animateSections);
    // Add smooth scrolling for navigation links
    var navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = link.getAttribute('href') || '';
            if (targetId.charAt(0) === '#') {
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    if (navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.contains('nav-active')) {
                        navLinks.classList.remove('nav-active');
                        if (burger)
                            burger.classList.remove('toggle');
                    }
                }
            }
        });
    });
});
