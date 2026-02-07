// Smooth Scroll
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}
// Modal Functionality
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
  modal.style.display = "flex";   // 🔥 flex for center
  modalImg.src = src;
}

function closeModal() {
  modal.style.display = "none";
}

/* close when clicking outside */
modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Typing Effect
const words = ["Cyber Security Specialist", "Bug Hunter", "SQA Engineer"];
let i = 0, j = 0;
let deleting = false;
const text = document.querySelector(".typing-text");

function type() {
  const word = words[i];

  if (!deleting) {
    text.textContent = word.slice(0, ++j);
    if (j === word.length) setTimeout(() => deleting = true, 1200);
  } else {
    text.textContent = word.slice(0, --j);
    if (j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Theme Toggle
  const toggle = document.getElementById("themeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

