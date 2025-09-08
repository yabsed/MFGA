// index.js

// 1. Scroll Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

// 2. Dark Mode Toggle
const themeToggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

const applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
};

// Apply saved theme on load
if (currentTheme) {
    applyTheme(currentTheme);
}

themeToggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.contains("dark-mode");
    applyTheme(isDarkMode ? "light" : "dark");
});