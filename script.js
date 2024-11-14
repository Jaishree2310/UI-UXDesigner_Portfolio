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
  
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link, .hire-btn').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
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

document.addEventListener('DOMContentLoaded', function() {
  // Enhanced hover animations for badges
  const badges = document.querySelectorAll('.badge');
  
  badges.forEach(badge => {
      badge.addEventListener('mouseover', function() {
          // Pause the floating animation when hovered
          this.style.animationPlayState = 'paused';
          
          // Add a subtle scale effect
          this.style.transform = 'translateY(-5px) rotate(8deg) scale(1.1)';
      });
      
      badge.addEventListener('mouseout', function() {
          // Resume the floating animation
          this.style.animationPlayState = 'running';
          
          // Reset transforms
          this.style.transform = '';
      });
      
      // Add click ripple effect
      badge.addEventListener('click', function(e) {
          let ripple = document.createElement('div');
          ripple.className = 'ripple';
          this.appendChild(ripple);
          
          let rect = this.getBoundingClientRect();
          let size = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = size + 'px';
          
          ripple.style.left = e.clientX - rect.left - size/2 + 'px';
          ripple.style.top = e.clientY - rect.top - size/2 + 'px';
          
          setTimeout(() => ripple.remove(), 600);
      });
  });
  
  // Smooth scroll for the "Say hello!" button
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

document.querySelectorAll('.blog-link').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add animation to quick links on page load
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.quick-link');
  links.forEach((link, index) => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      setTimeout(() => {
          link.style.transition = 'all 0.5s ease';
          link.style.opacity = '1';
          link.style.transform = 'translateY(0)';
      }, 100 * index);
  });
});

