// ========== Mobile Menu Logic ==========
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ========== Scroll Animation (Reveal) ==========
const revealSections = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealSections.forEach((section) => {
  revealObserver.observe(section);
});

// ========== Typing Effect ==========
const words = ["Cyber Security Enthusiast", "Bug Hunter", "SQA Engineer"];
let i = 0, j = 0;
let isDeleting = false;
const typingText = document.querySelector(".typing-text");

function type() {
  if (!typingText) return;
  const currentWord = words[i];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, j - 1);
    j--;
  } else {
    typingText.textContent = currentWord.substring(0, j + 1);
    j++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === currentWord.length) {
    speed = 2000; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 500; // Pause before new word
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);

// ========== Theme Toggle ==========
const themeBtn = document.getElementById("themeToggle");
const body = document.body;

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ========== Modal Logic ==========
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close on outside click or Escape key
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}
window.onkeydown = function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
}
