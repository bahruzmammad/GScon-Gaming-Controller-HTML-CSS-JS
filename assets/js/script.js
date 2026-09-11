const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("navigation-links");
const menuButtonIcon = menuButton?.querySelector("i");
if (menuButton && navigationLinks && menuButtonIcon) {
  menuButton.addEventListener("click", () => {
    navigationLinks.classList.toggle("open");
    const isOpen = navigationLinks.classList.contains("open");
    menuButtonIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  navigationLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navigationLinks.classList.remove("open");
      menuButtonIcon.className = "ri-menu-line";
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
/* Scroll Reveal */ if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOptions = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease",
    reset: false,
  };
  /* Hero */ ScrollReveal().reveal(".hero-image img", {
    ...scrollRevealOptions,
    origin: "right",
  });
  ScrollReveal().reveal(".hero-content h1", {
    ...scrollRevealOptions,
    delay: 500,
  });
  ScrollReveal().reveal(".hero-content p", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  ScrollReveal().reveal(".hero-buttons", {
    ...scrollRevealOptions,
    delay: 1500,
  });
  /* Features */ ScrollReveal().reveal(".features-content .section-subtitle", {
    ...scrollRevealOptions,
  });
  ScrollReveal().reveal(".features-content .section-title", {
    ...scrollRevealOptions,
    delay: 500,
  });
  ScrollReveal().reveal(".features-content > p", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  ScrollReveal().reveal(".features-button", {
    ...scrollRevealOptions,
    delay: 1500,
  });
  ScrollReveal().reveal(".feature-card", {
    duration: 1000,
    interval: 300,
    delay: 500,
    origin: "bottom",
    distance: "50px",
  });
  /* Banners */ ScrollReveal().reveal(".banner-card", {
    ...scrollRevealOptions,
    interval: 400,
  });
  /* Specifications */ ScrollReveal().reveal(".specification-card", {
    duration: 1000,
    interval: 400,
    origin: "bottom",
    distance: "50px",
  });
  /* Products */ ScrollReveal().reveal(".products-content img", {
    ...scrollRevealOptions,
    origin: "right",
  });
  ScrollReveal().reveal(".products-content > p", {
    ...scrollRevealOptions,
    delay: 500,
  });
  ScrollReveal().reveal(".products-button", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  ScrollReveal().reveal(".products-list li", {
    duration: 1000,
    interval: 300,
    delay: 500,
    origin: "left",
    distance: "50px",
  });
  /* Footer */ ScrollReveal().reveal(".footer-column", {
    duration: 1000,
    interval: 300,
    origin: "bottom",
    distance: "40px",
  });
}
