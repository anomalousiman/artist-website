const slides = [
  { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85", alt: "Artwork displayed in a contemporary gallery" },
  { src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85", alt: "Colourful abstract painting" },
  { src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=85", alt: "Figurative artwork in a gallery" },
  { src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=85", alt: "Contemporary artwork with expressive colour" }
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
