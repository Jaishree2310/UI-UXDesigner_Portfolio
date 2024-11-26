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
    const href = this.getAttribute('href');
    if (href && !href.startsWith('mailto:')) {
        // Prevent default behavior for non-mailto links
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
});






// document.querySelectorAll('.blog-link').forEach(link => {
//   link.addEventListener('click', (e) => {
//       e.preventDefault();
//       const href = link.getAttribute('href');
//       document.querySelector(href).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });







document.querySelectorAll('.blog-link').forEach(link => {
link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // Check if the link is an internal anchor
    if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    } 
    // If it's an external link, do nothing and let it redirect
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

document.addEventListener('DOMContentLoaded', () => {
const filterButtons = document.querySelectorAll('.filter-btn');
const workCards = document.querySelectorAll('.work-card');
const themeToggle = document.createElement('button');

// Project Filtering Logic
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        workCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// // Theme Toggle Setup
// themeToggle.textContent = '🌓 Toggle Theme';
// themeToggle.classList.add('theme-toggle-btn');
// document.querySelector('.sticky-nav .nav-links').appendChild(themeToggle);

// // Theme Toggle Logic
// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     document.body.classList.toggle('light-mode');
    
    // Optional: Store user preference
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme-preference', currentMode);
});

// Check Stored Theme Preference
const storedTheme = localStorage.getItem('theme-preference');
if (storedTheme) {
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(`${storedTheme}-mode`);
} else {
    // Default to dark mode
    document.body.classList.add('dark-mode');
}






function updateTime() {
  const now = new Date();
  
  // Get hours in 24-hour format
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  // Add leading zeros
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  
  // Update DOM elements
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Hover effects for social links
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
      link.style.textDecoration = 'underline';
  });
  link.addEventListener('mouseleave', () => {
      link.style.textDecoration = 'none';
  });
});












const planets = document.querySelectorAll('.planet');
        const contentTitle = document.querySelector('.content-title');
        const contentText = document.querySelector('.content-text');

        const planetContent = {
            sun: {
                title: "Sun / Empathy",
                text: "Empathy is at the heart of everything I do, much like the sun is the center of the solar system. I believe that to truly understand a problem, you must understand how it genuinely affects the person behind it. I was deeply inspired by a story in Creative Confidence by Tom and David Kelley. In it, a group of students designed low-cost incubators for babies in India which seemed promising, but when they traveled to India and spoke directly with the mothers, they discovered a critical flaw. These mothers didn't trust Western medicine, making the incubators ineffective in their context. This revelation profoundly influenced my approach to UX design. It taught me that without empathy and a deep understanding of the user's real-world experience solutions can miss the mark. This lesson is at the core of my design system and drives my commitment to human-centered design.",
                color: "#FFD700"
            },


            mercury: {
              title: "Mercury / Speed & Adaptation",
              text: "In my design system, Mercury represents speed and effective communication. I value speed in adaptation and iteration, rapidly testing and refining prototypes to meet users' real needs. Effective communication is crucial, whether it's understanding users, conveying clear messages through design, or ensuring my team is aligned and working seamlessly towards a shared vision.",
              color: "#C2CCCC"
          },
          venus: {
              title: "Venus / UI",
              text: "Named after the Roman goddess of beauty and love, Venus represents UI in my design system. Just as Venus embodies elegance and allure, UI design is a testament to my lifelong passion and love for art, which began in childhood. Exceptional UI is more than just functional; it transforms user interactions into delightful and visually captivating experiences, underscoring the importance of creating interfaces that are both beautiful and effective.",
              color: "#C8A2C8"
          },
          earth: {
            title: "Earth / Future Thinking",
            text: "Earth symbolizes a focus on the future. Chosen because it represents our home and the deep interest I have about its future and the future of humankind. My constant reflection on emerging challenges—such as the ethics of AI, the potential of space transportation, the prospect of living in space, and the urgent need to address environmental issues—drives my approach to design. Just as Earth is our home and the center of our current reality, future thinking is about envisioning and addressing the problems on the horizon. This mindset reflects a commitment to proactive and innovative solutions, aiming to shape a better future by tackling tomorrows challenges with foresight and creativity",
            color: "#008000"
          },
          mars: {
            title: "Mars / Problem Solving",
            text:"Mars, known as the Red Planet and associated with the Roman god of war, symbolizes problem-solving. Just as Mars represents strength and determination, problem-solving in design requires resilience and a strategic approach. My work is driven by a desire to tackle complex challenges head-on, whether it's understanding user pain points, navigating the intricacies of a project, or finding innovative solutions to seemingly insurmountable obstacles. Mars embodies the spirit of facing challenges with creativity and perseverance, ensuring that every design decision contributes to overcoming barriers and delivering effective, user-centered solutions.",
            color: "brown"
          },
          jupiter: {
            title: "Jupiter/ Curiosity and AI",
            text: "In my design system, I associate Jupiter with ideation, which is fitting since Jupiter is my favorite planet and ideation is my favorite part of the design process. Just as Jupiter’s vast size and gravitational pull bring everything into alignment, ideation acts as the central force that transforms insights into creative solutions. I enjoy spending time deeply analyzing and understanding the problem, and from there, ideation opens up endless possibilities. It’s where we take all the research and insights gathered and explore ways to solve problems in meaningful, user-centered ways. This stage is critical because it allows for the freedom to experiment with innovative ideas that can inspire and delight users. For me, ideation is the driving force behind design—expansive, powerful, and filled with potential, just like Jupiter itself",
            color: "#C9E4CA"
          },
          saturn: {
            title: "Saturn/ Structure and Balance",
            // text: "Saturn, the sixth planet from the Sun, represents UX research in my design
            // system. Just as Saturn is known for its stunning ring system, UX research is the foundation upon which
            // all design decisions are built. I believe that understanding users' needs, behaviors, and motivations is
            // crucial to creating effective solutions. Through rigorous research, I uncover valuable insights that inform
            // design decisions, ensuring that every solution is grounded in user needs and centered around their
            // experiences.",
            text: "Saturn, known for its stunning and orderly rings, symbolizes structure and balance in our design system. Just as Saturn’s rings are meticulously arranged, creating a sense of harmony and order, structure in design ensures that every element works together cohesively. Balance is about creating designs that are aesthetically pleasing and functionally sound, where every component is thoughtfully placed and serves a purpose. Saturn reminds us that a well-structured and balanced design is crucial for providing users with an intuitive and seamless experience, where form and function exist in perfect harmony",
            color: "#8B9467"
          },
          uranus: {
            title: "Uranus/ Perspective & Unconventional Thinking",
            text: "Uranus, known for its unique tilt and distinct blue hue, symbolizes perspective and unconventional thinking. Just as Uranus stands out for its atypical rotation and striking appearance, embracing unconventional thinking allows us to approach problems from fresh angles and break away from traditional patterns. Perspective involves seeing challenges from different viewpoints and considering diverse solutions, fostering creativity and innovation. Uranus reminds us that by valuing unique perspectives and exploring non-traditional approaches, we can uncover new opportunities and develop groundbreaking designs.",
          color: "#8B9467"
          },
          neptune: {
            // title: "Neptune/ Imagination & Storytelling",
            // text: "Neptune, the farthest planet from the Sun, represents imagination and storytelling in
            // my design system. Just as Neptune is associated with the ocean's vastness and mystery, imagination
            // is the boundless and creative force that brings ideas to life. Through storytelling, we can convey
            // complex information in a way that resonates with users, making it more relatable and memorable.
            // Imagination and storytelling are essential in design, as they enable us to craft experiences that are
            // both engaging and meaningful.",
            title: "Neptune/ Exploration & Innovation",
            text: "Neptune, the distant and mysterious planet. Just as Neptune is a symbol of the unknown, pushing the boundaries of what we understand, exploration in design encourages us to venture into uncharted territory, seeking out new ideas and unconventional solutions. Innovation is about challenging the status quo and daring to think differently, much like how Neptune invites us to explore the depths of creativity. Neptune reminds us that true innovation comes from a willingness to explore the unknown, embrace uncertainty, and push the limits of whats possible in design.",
            color: "#032B44"
            },

    };


        planets.forEach(planet => {
            planet.addEventListener('click', () => {
                const planetType = planet.dataset.planet;
                const content = planetContent[planetType];
                
                // Reset all planets
                planets.forEach(p => p.style.backgroundColor = '');
                
                if (content) {
                    planet.style.backgroundColor = content.color;
                    contentTitle.textContent = content.title;
                    contentText.textContent = content.text;
                }
            });
        });


        const solarSystem = document.getElementById("solarSystem");
        const leftArrow = document.getElementById("leftArrow");
        const rightArrow = document.getElementById("rightArrow");
        
        function scrollSolarSystem(direction) {
            const scrollAmount = 200; // Adjust scroll distance as needed
            solarSystem.scrollBy({
                left: direction * scrollAmount,
                behavior: "smooth",
            });
        }
        
        // Function to toggle the visibility of the arrows
        function toggleArrows() {
            const maxScrollLeft = solarSystem.scrollWidth - solarSystem.clientWidth;
        
            // Show or hide the left arrow
            if (solarSystem.scrollLeft > 0) {
                leftArrow.style.display = "flex";
            } else {
                leftArrow.style.display = "none";
            }
        
            // Show or hide the right arrow
            if (solarSystem.scrollLeft < maxScrollLeft) {
                rightArrow.style.display = "flex";
            } else {
                rightArrow.style.display = "none";
            }
        }
        
        // Attach event listeners
        solarSystem.addEventListener("scroll", toggleArrows);
        window.addEventListener("resize", toggleArrows);
        
        // Initialize arrow visibility on page load
        toggleArrows();