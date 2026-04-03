document.addEventListener("DOMContentLoaded", () => {

  // Contact Form

  document.addEventListener("fs:form:success", () => {
    const box = document.querySelector("[data-fs-success]");
    if (box) {
      box.classList.add("fs-show");
    }
  });

  // Image Sliders
  const sliders = document.querySelectorAll(".tea-slider");

  sliders.forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");
    let index = 0;

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
    }

    if (nextBtn && prevBtn && slides.length > 0) {
      nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
      });

      prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      });

      showSlide(index);
    }
  });

  // Accordion

  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const iframe = content.querySelector("iframe");

      header.classList.toggle("active");

      // Closing
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        if (iframe) iframe.src = ""; // stop video
      }

      // Opening
      else {
        content.style.maxHeight = content.scrollHeight + "px";
        if (iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
        }
      }
    });
  });

  // Background Music

  document.addEventListener("click", () => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }
  }, { once: true });

});