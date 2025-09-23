// Theme switching
function switchTheme(theme) {
  const html = document.documentElement;
  html.className = `theme-${theme}`;
  
  // Update button states
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.style.opacity = '0.6';
  });
  document.querySelector(`.theme-btn.${theme}`).style.opacity = '1';
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme button state
  document.querySelector('.theme-btn.orange').style.opacity = '1';
  document.querySelector('.theme-btn.nude').style.opacity = '0.6';
  
  // Initialize animations
  observeAll();
});

// Smooth reveal animations
let io;
function observeAll() {
  if (io) io.disconnect();
  
  io = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple items
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 100);
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.reveal, .section-card').forEach(el => {
    io.observe(el);
  });
}

// FAQ functionality
document.body.addEventListener('click', (e) => {
  const q = e.target.closest('.faq-q');
  if (!q) return;
  
  const item = q.parentElement;
  const a = item.querySelector('.faq-a');
  const arr = q.querySelector('.arr');
  const isOpen = a.style.display === 'block';
  
  // Close all other FAQs
  document.querySelectorAll('.faq-a').forEach(x => x.style.display = 'none');
  document.querySelectorAll('.faq-q .arr').forEach(x => x.style.transform = '');
  
  // Toggle current FAQ
  if (!isOpen) {
    a.style.display = 'block';
    arr.style.transform = 'rotate(180deg)';
  }
});

// Sticky CTA
const sticky = document.querySelector('.sticky-cta');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  if (scrollY > 1000) {
    sticky.classList.add('show');
  } else {
    sticky.classList.remove('show');
  }
  
  lastScrollY = scrollY;
});

// Payment buttons
document.querySelectorAll('[data-pay]').forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    
    // Add loading state
    const originalText = button.textContent;
    button.textContent = 'Загрузка...';
    button.disabled = true;
    
    try {
      // Stripe integration placeholder
      // const response = await fetch('/api/checkout', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     plan: button.dataset.pay
      //   })
      // });
      // 
      // const data = await response.json();
      // if (data.url) {
      //   window.location = data.url;
      // }
      
      // For now, scroll to pricing
      document.getElementById('pricing')?.scrollIntoView({
        behavior: 'smooth'
      });
      
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      // Reset button state
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1000);
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

// Enhanced hover effects for cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll handler
window.addEventListener('scroll', debounce(() => {
  const scrollY = window.scrollY;
  
  if (scrollY > 1000) {
    sticky.classList.add('show');
  } else {
    sticky.classList.remove('show');
  }
}, 10));