const navLinks = document.querySelector(".nav-links");

const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburguerBtn = document.querySelector(".nav-toggle-hamburger");
const closeBtn = document.querySelector(".nav-toggle-close");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("visible");
  navToggle.classList.toggle("visible");
  if (
    navLinks.classList.contains("visible") &&
    navToggle.classList.contains("visible")
  ) {
    navLinks.style.transform = "translateX(0)";
    hamburguerBtn.style.display = "none";
    closeBtn.style.display = "block";
    document.body.classList.add("dark");
  } else {
    navLinks.style.transform = "translateX(100%)";
    hamburguerBtn.style.display = "block";
    closeBtn.style.display = "none";
    document.body.classList.remove("dark");
  }
});
