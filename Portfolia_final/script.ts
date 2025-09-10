// TypeScript version of your portfolio script
interface AnimatedElement {
  element: HTMLElement;
  animationClass: string;
}

window.addEventListener('DOMContentLoaded', (): void => {
  // Navigation menu toggle for mobile
  const burger: HTMLElement | null = document.querySelector('.burger');
  const navLinks: HTMLElement | null = document.querySelector('.nav-links');
  
  if (burger && navLinks) {
    burger.addEventListener('click', (): void => {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  }
  
  // Add animation to profile image
  const heroImage: HTMLElement | null = document.querySelector('.hero-image img');
  if (heroImage) {
    heroImage.classList.add('animated-pic');
    
    heroImage.addEventListener('mouseenter', (): void => {
      heroImage.classList.add('animate-pulse');
    });
    
    heroImage.addEventListener('mouseleave', (): void => {
      heroImage.classList.remove('animate-pulse');
    });
  }
  
  // Add fade-in animation to sections when scrolled into view
  const animateSections = (): void => {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
    
    sections.forEach((section: HTMLElement): void => {
      const sectionTop: number = section.getBoundingClientRect().top;
      const windowHeight: number = window.innerHeight;
      
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
  const navItems: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-links a');
  
  navItems.forEach((link: HTMLAnchorElement): void => {
    link.addEventListener('click', (e: Event): void => {
      e.preventDefault();
      
      const targetId: string = link.getAttribute('href') || '';
      if (targetId.charAt(0) === '#') {
        const targetElement: HTMLElement | null = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navLinks?.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            if (burger) burger.classList.remove('toggle');
          }
        }
      }
    });
  });
});
