// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMobile = document.getElementById('navMobile');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navMobile.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navMobile.classList.remove('active');
  });
});

// ===== Header Scroll Effect =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Active Section Highlighting =====
const sections = ['home', 'about', 'services', 'companies', 'gallery', 'contact'];
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + 150;
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    }
  });
});

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Gallery Lightbox =====
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

const galleryData = [
  { src: "/static/assets/image/gallery-1.jpg", caption: 'Traditional Nepali Handicrafts' },
  { src: "/static/assets/image/gallery-2.jpg", caption: 'International Trade Fair' },
  { src: "/static/assets/image/gallery-3.jpg", caption: 'Nepal-Japan Cultural Exchange' },
  { src: "/static/assets/image/gallery-4.jpg", caption: 'Tourism in Nepal' },
  { src: "/static/assets/image/gallery-5.jpg", caption: 'Software Development Center' },
  { src: "/static/assets/image/gallery-6.jpg", caption: 'Namaste - Traditional Greeting' }
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImage.src = galleryData[index].src;
  lightboxCaption.textContent = galleryData[index].caption;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  lightboxImage.src = galleryData[currentIndex].src;
  lightboxCaption.textContent = galleryData[currentIndex].caption;
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  lightboxImage.src = galleryData[currentIndex].src;
  lightboxCaption.textContent = galleryData[currentIndex].caption;
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Create new toast
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (!name || !email || !subject || !message) {
    showToast('Please fill in all fields');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address');
    return;
  }
  
  // Success (in a real app, you'd send this to a server)
  showToast('Thank you! Your message has been sent.');
  contactForm.reset();
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards and sections for scroll animations
document.querySelectorAll('.service-card, .company-card, .about-card, .contact-card, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});