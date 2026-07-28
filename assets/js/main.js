/* ==========================================================================
   Main JavaScript — Dra. Noemi de Araújo
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Scroll-Reveal ---------- */
  const revealElements = function () {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const visibleThreshold = 150;

    for (let i = 0; i < reveals.length; i++) {
      const elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - visibleThreshold) {
        reveals[i].classList.add("active");
      }
    }
  };

  window.addEventListener("scroll", revealElements, { passive: true });
  revealElements();

  /* ---------- Smooth Scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  /* ---------- Video fallback: if video fails, show poster ---------- */
  const heroVideo = document.querySelector("video");
  if (heroVideo) {
    heroVideo.addEventListener("error", function () {
      this.style.display = "none";
      const poster = this.getAttribute("poster");
      if (poster) {
        this.parentElement.style.backgroundImage = "url(" + poster + ")";
        this.parentElement.classList.add("hero-video-fallback");
      }
    });
  }
})();
