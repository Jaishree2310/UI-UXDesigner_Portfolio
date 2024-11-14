// Process Steps Animation
const observeSteps = () => {
    const steps = document.querySelectorAll('.process-step');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
  
    steps.forEach((step) => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(20px)';
      step.style.transition = 'all 0.6s ease-out';
      observer.observe(step);
    });
  };
  
  document.addEventListener('DOMContentLoaded', observeSteps);
  
  // See Examples Button Hover Effect
  document.querySelectorAll('.see-examples').forEach((button) => {
    button.addEventListener('mouseover', () => (button.style.transform = 'scale(1.05)'));
    button.addEventListener('mouseout', () => (button.style.transform = 'scale(1)'));
  });
  
  // Photo Item Scroll Animation and Hover Effect
  document.addEventListener('DOMContentLoaded', () => {
    const photoItems = document.querySelectorAll('.photo-item');
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const handleScroll = () => {
      photoItems.forEach((item, index) => {
        if (isInViewport(item) && !item.classList.contains('animate-up')) {
          setTimeout(() => {
            item.classList.add('animate-up');
            item.style.opacity = '1';
          }, index * 150);
        }
      });
    };
  
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  
    // Photo Item Hover Effect
    photoItems.forEach((item) => {
      const container = item.querySelector('.photo-container');
      const label = item.querySelector('.photo-label');
      const randomOffset = Math.random() * 40 - 20;
      item.style.transform = `translateY(${randomOffset}px)`;
  
      container.addEventListener('mouseenter', () => {
        container.style.transform = 'translateY(-10px) scale(1.02)';
        label.style.transform = 'translateY(-5px) scale(1.05)';
      });
  
      container.addEventListener('mouseleave', () => {
        container.style.transform = `translateY(${randomOffset}px)`;
        label.style.transform = 'translateY(0) scale(1)';
      });
    });
  });
  
  // Smooth Scroll for Anchor Links
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScroll(anchor.getAttribute('href'));
    });
  });
 
  
  // Parallax Effect on Mouse Move
  document.addEventListener('mousemove', (e) => {
    const gridBackground = document.querySelector('.grid-background');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gridBackground.style.transform = `translate(${x}px, ${y}px)`;
  });
  
  // GSAP Animations
  document.addEventListener('DOMContentLoaded', () => {
    // Section Fade-in Animation
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
      });
    });
  
    // Logo, Navigation, Main Content Animation
    // gsap.from('.logo', { opacity: 0, x: -50, duration: 1, ease: 'power2.out' });
    // gsap.from('.nav-links a, .hire-btn', {
    //   opacity: 0,
    //   y: -30,
    //   duration: 0.8,
    //   stagger: 0.2,
    //   ease: 'power1.out',
    //   delay: 0.5,
    // });
    // gsap.from('.main-content h1, .main-content p', {
    //   opacity: 0,
    //   y: 20,
    //   duration: 1,
    //   stagger: 0.3,
    //   ease: 'power2.out',
    //   delay: 0.3,
    // });
  
    // Button Hover Animation
    gsap.utils.toArray('.hire-btn, .view-project, .see-examples, .project-idea__button, .footer__button').forEach((button) => {
      button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.05, duration: 0.2, ease: 'power1.inOut' }));
      button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1, duration: 0.2, ease: 'power1.inOut' }));
    });
  });
  
  // Custom Cursor
  document.addEventListener('DOMContentLoaded', () => {
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');
  
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursorOuter, { x: e.clientX, y: e.clientY, duration: 0.15 });
      gsap.to(cursorInner, { x: e.clientX, y: e.clientY, duration: 0.05 });
    });
  
    document.querySelectorAll('button, a, img').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursorOuter, { scale: 1.5, borderColor: '#00aced' });
        gsap.to(cursorInner, { scale: 0.6, backgroundColor: '#00aced' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursorOuter, { scale: 1, borderColor: '#ff6347' });
        gsap.to(cursorInner, { scale: 1, backgroundColor: 'transparent' });
      });
    });
  });
  
  // Project Card Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    observerOptions
  );
  
  document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card);
  });
  
  // Fade-in and Slide-in Animations
  document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 }
    );
  
    fadeInElements.forEach((element) => {
      observer.observe(element);
    });
  
    slideInElements.forEach((element) => {
      observer.observe(element);
    });
  });
  
//   // Hero Section Animations
//   document.addEventListener('DOMContentLoaded', () => {
//     gsap.registerPlugin(ScrollTrigger);
  
//     gsap.to('.text-container', {
//       opacity: 1,
//       x: 0,
//       duration: 0.8,
//       ease: 'power2.out',
//       scrollTrigger: {
//         trigger: '.text-container',
//         start: 'top 80%',
//         end: 'top 20%',
//         scrub: true,
//         toggleActions: 'play none none reverse',
//       },
//     });
  
//     gsap.to('.hero-section', {
//       borderColor: '#2ecc71',
//       borderWidth: '10px',
//       ease: 'none',
//       scrollTrigger: {
//         trigger: '.hero-section',
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true,
//         toggleActions: 'play none none reverse',
//       },
//     });
//   });
  
  // Smooth Scroll for Navigation Links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor .cursor-outer');
  const innerCursor = document.querySelector('.custom-cursor .cursor-inner');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    innerCursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  });
  
  document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    innerCursor.classList.add('click');
  });
  
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
    innerCursor.classList.remove('click');
  });
  











//   gsap.registerPlugin(ScrollTrigger);

// gsap.to(".text", {
//   scrollTrigger: {
//     trigger: ".text",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleClass: "reveal"
//   },
//   duration: 1,
//   ease: "power2.out"
// });








// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes when page loads
    const imageContainer = document.querySelector('.image-container');
    const textContainer = document.querySelector('.text-container');
    
    // Trigger animations
    imageContainer.classList.add('fade-in');
    textContainer.classList.add('slide-in');

    // Add hover effect to highlighted words
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseover', () => {
            highlight.style.transform = 'scale(1.05)';
            highlight.style.transition = 'transform 0.3s ease';
        });

        highlight.addEventListener('mouseout', () => {
            highlight.style.transform = 'scale(1)';
        });
    });
});

