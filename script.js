const slides = [
  { src: "images/artwork-01 jpg", alt: "" },
  { src: "images/artwork-02 jpg", alt: "" },
  { src: "images/artwork-03 jpg", alt: "Figurative artwork in a gallery" },
  { src: "images/artwork-04 jpg", alt: "Contemporary artwork with expressive colour" }
  { src: "images/artwork-05 jpg", alt: "Contemporary artwork with expressive colour" }
];

document.querySelectorAll(".year").forEach((year) => { year.textContent = new Date().getFullYear(); });

const image = document.querySelector(".slide-image");
const controls = document.querySelector(".slide-controls");

if (image && controls) {
  let active = 0;
  const dots = slides.map((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show artwork ${index + 1}`);
    dot.setAttribute("aria-current", index === active ? "true" : "false");
    dot.addEventListener("click", () => showSlide(index));
    controls.appendChild(dot);
    return dot;
  });

  function showSlide(index) {
    active = index;
    image.classList.add("is-changing");
    window.setTimeout(() => {
      image.src = slides[active].src;
      image.alt = slides[active].alt;
      image.classList.remove("is-changing");
      dots.forEach((dot, dotIndex) => dot.setAttribute("aria-current", dotIndex === active ? "true" : "false"));
    }, 350);
  }

  window.setInterval(() => showSlide((active + 1) % slides.length), 5000);
}
