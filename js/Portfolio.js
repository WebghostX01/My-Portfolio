// Select elements
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector("header");

// Define ScrollReveal options
window.sr = ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// Reveal elements on scroll
sr.reveal(".tags", { origin: "bottom", distance: "20px", duration: 2000 });
sr.reveal(".home-content", ".heading", { origin: "top" });

// Handle menu icon click
menuIcon.onclick = function () {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

// Define handleScroll function
function handleScroll() {
  const scrollTop = window.scrollY;

  // Loop through each section
  sections.forEach((section) => {
    const offsetTop = section.offsetTop - 150;
    const height = section.offsetHeight;

    if (scrollTop >= offsetTop && scrollTop < offsetTop + height) {
      const id = section.getAttribute("id");
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      activeLink.classList.add("active");
    }
  });

  // Toggle the "sticky" class on the header
  header.classList.toggle("sticky", scrollTop > 100);

  // Reset menu icon and nav bar
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
}

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer.", "Web Designer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Add event listener to window scroll
window.addEventListener("scroll", handleScroll);
