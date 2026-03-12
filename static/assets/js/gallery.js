// ===== Hero Slideshow =====
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
}

// ===== Gallery Data =====
const galleryDatabase = [
  {
    id: 1,
    src: '/static/assets/image/gallery-1.jpg',
    title: 'Traditional Nepali Handicrafts',
    caption: 'Showcasing the finest traditional Nepali handicrafts at our international trade exhibition. These handcrafted items represent centuries of cultural heritage and artisanal expertise.',
    category: 'handicrafts',
    tags: ['nepal', 'business', 'international']
  },
  {
    id: 2,
    src: '/static/assets/image/gallery-2.jpg',
    title: 'International Trade Fair',
    caption: 'Himalaya Network Group participating in a major international trade fair, connecting Nepali businesses with global markets and fostering international partnerships.',
    category: 'trade',
    tags: ['international', 'business', 'nepal']
  },
  {
    id: 3,
    src: '/static/assets/image/gallery-3.jpg',
    title: 'Nepal-Japan Cultural Exchange',
    caption: 'A vibrant cultural exchange program celebrating the rich traditions and contemporary culture of both Nepal and Japan, strengthening bilateral relations.',
    category: 'cultural',
    tags: ['nepal', 'japan', 'festival']
  },
  {
    id: 4,
    src: '/static/assets/image/gallery-4.jpg',
    title: 'Tourism in Nepal',
    caption: 'Breathtaking landscapes and cultural experiences from our tourism packages. Discover the natural beauty and hospitality that Nepal has to offer.',
    category: 'tourism',
    tags: ['nepal', 'adventure', 'people']
  },
  {
    id: 5,
    src: '/static/assets/image/statue1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 6,
    src: '/static/assets/image/temple.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 7,
    src: '/static/assets/image/award.png',
    title: 'Nepal Pavilion',
    caption: 'Best Award and Gold Medal Winner',
    category: 'exibition',
    tags: ['japan', 'award']
  },
  {
    id: 8,
    src: '/static/assets/image/award1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['japan', 'award']
  },
  {
    id: 9,
    src: '/static/assets/image/birendra.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 10,
    src: '/static/assets/image/chair.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 11,
    src: '/static/assets/image/dana1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 12,
    src: '/static/assets/image/dana1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 13,
    src: '/static/assets/image/dana2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 14,
    src: '/static/assets/image/dana3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 15,
    src: '/static/assets/image/dana4.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 16,
    src: '/static/assets/image/dana5.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 17,
    src: '/static/assets/image/dana6.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 18,
    src: '/static/assets/image/dana7.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 19,
    src: '/static/assets/image/dana8.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 20,
    src: '/static/assets/image/dana9.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 21,
    src: '/static/assets/image/dana10.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 22,
    src: '/static/assets/image/dana11.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 23,
    src: '/static/assets/image/dana12.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 24,
    src: '/static/assets/image/dana13.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 25,
    src: '/static/assets/image/statue.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 26,
    src: '/static/assets/image/dana14.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 27,
    src: '/static/assets/image/dipendra.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 28,
    src: '/static/assets/image/father.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 29,
    src: '/static/assets/image/fun1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 30,
    src: '/static/assets/image/fun2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 31,
    src: '/static/assets/image/fun3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 32,
    src: '/static/assets/image/hari1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 33,
    src: '/static/assets/image/hari2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 34,
    src: '/static/assets/image/hari3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 35,
    src: '/static/assets/image/hashimo.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['japan', 'people', 'festival']
  },
  {
    id: 36,
    src: '/static/assets/image/hata.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['japan', 'people', 'festival']
  },
  {
    id: 37,
    src: '/static/assets/image/home.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 38,
    src: '/static/assets/image/japan1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['japan', 'people', 'festival']
  },
  {
    id: 39,
    src: '/static/assets/image/japan2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['japan', 'people', 'festival']
  },
  {
    id: 40,
    src: '/static/assets/image/japan3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['japan', 'people', 'festival']
  },
  {
    id: 41,
    src: '/static/assets/image/med1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['monaco', 'people', 'festival']
  },
  {
    id: 42,
    src: '/static/assets/image/med2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 43,
    src: '/static/assets/image/med3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 44,
    src: '/static/assets/image/med4.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 45,
    src: '/static/assets/image/media1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 46,
    src: '/static/assets/image/media2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 47,
    src: '/static/assets/image/monaco1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['monaco', 'people', 'festival']
  },
  {
    id: 48,
    src: '/static/assets/image/monaco2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['monaco', 'people', 'festival']
  },
  {
    id: 49,
    src: '/static/assets/image/monaco3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['monaco', 'people', 'festival']
  },
  {
    id: 50,
    src: '/static/assets/image/monaco4.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['monaco', 'people', 'festival']
  },
  {
    id: 51,
    src: '/static/assets/image/monaco5.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['monaco', 'people', 'festival']
  },
  {
    id: 52,
    src: '/static/assets/image/monaco6.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['monaco', 'people', 'festival']
  },
  {
    id: 53,
    src: '/static/assets/image/mori.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['japan', 'people', 'festival']
  },
  {
    id: 54,
    src: '/static/assets/image/neta1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 55,
    src: '/static/assets/image/neta2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 56,
    src: '/static/assets/image/neta3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 57,
    src: '/static/assets/image/parash.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 58,
    src: '/static/assets/image/scolor1.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 59,
    src: '/static/assets/image/scolor2.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 60,
    src: '/static/assets/image/scolor3.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 61,
    src: '/static/assets/image/scolor4.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 62,
    src: '/static/assets/image/scolor5.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  {
    id: 63,
    src: '/static/assets/image/scolor6.png',
    title: 'Namaste - Traditional Greeting',
    caption: 'The universal greeting of Nepal - Namaste. A gesture of respect and unity that represents the spirit of Himalaya Network Group.',
    category: 'cultural',
    tags: ['nepal', 'people', 'festival']
  },
  
  

];

let currentLightboxIndex = 0;
let filteredGallery = [...galleryDatabase];
let selectedCategories = new Set(['*']);
let selectedTags = new Set(['*']);

// ===== Initialize Gallery =====
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
  renderGallery(galleryDatabase);
  setupEventListeners();
});

// ===== Render Gallery Items =====
function renderGallery(items) {
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = '';

  items.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.dataset.id = item.id;
    galleryItem.dataset.category = item.category;
    galleryItem.dataset.tags = item.tags.join(',');
    
    galleryItem.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <div class="gallery-item-category">${item.category}</div>
          <div class="gallery-item-title">${item.title}</div>
          <div class="gallery-item-tags">
            ${item.tags.map(tag => `<span class="gallery-item-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    galleryItem.addEventListener('click', () => {
      openLightbox(item.id - 1);
    });

    galleryGrid.appendChild(galleryItem);
  });

  // Update total image count in lightbox
  document.getElementById('totalImageCount').textContent = items.length;
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
  // Category filter buttons - multiple selection
  document.querySelectorAll('.category-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      
      if (category === '*') {
        // Reset to all
        selectedCategories.clear();
        selectedCategories.add('*');
        document.querySelectorAll('.category-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        // Remove 'All' if other category is selected
        selectedCategories.delete('*');
        
        if (selectedCategories.has(category)) {
          selectedCategories.delete(category);
        } else {
          selectedCategories.add(category);
        }
        
        // If no categories selected, show all
        if (selectedCategories.size === 0) {
          selectedCategories.add('*');
        }
        
        // Update button states
        document.querySelectorAll('.category-tag').forEach(b => {
          const cat = b.dataset.category;
          if (cat === '*') {
            b.classList.toggle('active', selectedCategories.has('*'));
          } else {
            b.classList.toggle('active', selectedCategories.has(cat));
          }
        });
      }
      
      applyFilters();
    });
  });

  // Tag filter buttons - multiple selection
  document.querySelectorAll('.tag-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      
      if (tag === '*') {
        // Reset to all
        selectedTags.clear();
        selectedTags.add('*');
        document.querySelectorAll('.tag-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        // Remove 'All Tags' if other tag is selected
        selectedTags.delete('*');
        
        if (selectedTags.has(tag)) {
          selectedTags.delete(tag);
        } else {
          selectedTags.add(tag);
        }
        
        // If no tags selected, show all
        if (selectedTags.size === 0) {
          selectedTags.add('*');
        }
        
        // Update button states
        document.querySelectorAll('.tag-tag').forEach(b => {
          const t = b.dataset.tag;
          if (t === '*') {
            b.classList.toggle('active', selectedTags.has('*'));
          } else {
            b.classList.toggle('active', selectedTags.has(t));
          }
        });
      }
      
      applyFilters();
    });
  });

  // Reset filters button
  document.getElementById('resetFilters').addEventListener('click', () => {
    selectedCategories.clear();
    selectedCategories.add('*');
    selectedTags.clear();
    selectedTags.add('*');
    
    document.querySelectorAll('.category-tag, .tag-tag').forEach(btn => {
      const cat = btn.dataset.category;
      const tag = btn.dataset.tag;
      
      if ((cat === '*' || tag === '*')) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    applyFilters();
  });

  // Lightbox controls
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxOverlay = document.querySelector('.lightbox-overlay');

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', previousImage);
  lightboxNext.addEventListener('click', nextImage);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'ArrowRight') nextImage();
  });
}

// ===== Apply Filters =====
function applyFilters() {
  filteredGallery = galleryDatabase.filter(item => {
    // Category filter
    let categoryMatch = false;
    if (selectedCategories.has('*')) {
      categoryMatch = true;
    } else {
      categoryMatch = selectedCategories.has(item.category);
    }

    // Tag filter
    let tagMatch = false;
    if (selectedTags.has('*')) {
      tagMatch = true;
    } else {
      tagMatch = item.tags.some(tag => selectedTags.has(tag));
    }

    return categoryMatch && tagMatch;
  });

  renderGallery(filteredGallery);
}

// ===== Lightbox Functions =====
function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('galleryLightbox');
  const item = filteredGallery[currentLightboxIndex];

  if (!item) return;

  document.getElementById('lightboxImage').src = item.src;
  document.getElementById('lightboxTitle').textContent = item.title;
  document.getElementById('lightboxCaption').textContent = item.caption;
  document.getElementById('currentImageNumber').textContent = currentLightboxIndex + 1;

  // Render tags
  const tagsContainer = document.getElementById('lightboxTags');
  tagsContainer.innerHTML = item.tags
    .map(tag => `<span class="lightbox-tag">${tag}</span>`)
    .join('');

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function nextImage() {
  if (currentLightboxIndex < filteredGallery.length - 1) {
    openLightbox(currentLightboxIndex + 1);
  } else {
    // Loop to first image
    openLightbox(0);
  }
}

function previousImage() {
  if (currentLightboxIndex > 0) {
    openLightbox(currentLightboxIndex - 1);
  } else {
    // Loop to last image
    openLightbox(filteredGallery.length - 1);
  }
}

