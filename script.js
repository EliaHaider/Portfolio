// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(section => {
  observer.observe(section);
});

// Typing Animation for "Vector & Illustration Designer"
const text = "Vector & Illustration Designer";
let index = 0;
let currentText = '';

(function type() {
  currentText = text.slice(0, ++index);
  document.getElementById("typed-text").textContent = currentText;

  if (currentText.length === text.length) {
    return; // Stops when the full text is typed
  } else {
    setTimeout(type, 100); // Typing speed
  }
})();