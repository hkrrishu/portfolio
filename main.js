// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'light') {
  body.classList.remove('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
  
  // Add animation to theme toggle
  themeToggle.classList.add('rotating');
  setTimeout(() => {
    themeToggle.classList.remove('rotating');
  }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Scroll animations for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

// Add fade-in class to all sections and observe them
document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const formObject = {};
  
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  
  // Simulate form submission
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  setTimeout(() => {
    submitButton.textContent = 'Message Sent!';
    this.reset();
    
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 2000);
  }, 1500);
});

// Modal functionality for projects
function openModal(projectId) {
  const modal = document.getElementById(projectId.toLowerCase());
  document.body.style.overflow = 'hidden';
  
  // Show modal with animation
  modal.style.display = 'block';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function closeModal(projectId) {
  const modal = document.getElementById(projectId.toLowerCase());
  
  // Hide modal with animation
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
}

// Close modal when clicking outside of content
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      const modalId = modal.id;
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    }
  });
});

// Skill item animation on hover
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const icon = item.querySelector('i');
    icon.style.transform = 'rotate(20deg)';
  });
  
  item.addEventListener('mouseleave', () => {
    const icon = item.querySelector('i');
    icon.style.transform = 'rotate(0deg)';
  });
});

// Add parallax effect to home section
window.addEventListener('scroll', () => {
  const home = document.querySelector('.home');
  const scrollValue = window.scrollY;
  home.style.backgroundPositionY = scrollValue * 0.5 + 'px';
});

// Adding typing effect to the highlight text
const highlightText = document.querySelector('.highlight');
const originalText = highlightText.textContent;
highlightText.textContent = '';

let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    highlightText.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});

// Fix modals to match project names
document.addEventListener('DOMContentLoaded', function() {
  // Correct the modal IDs to match the function calls
  const cropLinkModal = document.getElementById('sparkv');
  if (cropLinkModal) {
    cropLinkModal.id = 'croplink';
  }
  
  const happyTailsModal = document.getElementById('vb');
  if (happyTailsModal) {
    happyTailsModal.id = 'happytails';
  }
});