const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const form=document.querySelector('.contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('.form-status');if(status)status.textContent='This is a template form. Connect it to your email service or website host to receive enquiries.';});}
const artworks = [
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85",
    alt: "Artwork displayed in a contemporary gallery"
  },
  {
    src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
    alt: "Colourful abstract painting"
  },
  {
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=85",
    alt: "Figurative artwork in a gallery"
  }
];

const rotatingArtwork = document.querySelector("#rotating-artwork");

if (rotatingArtwork) {
  let currentArtwork = 0;

  setInterval(() => {
    currentArtwork = (currentArtwork + 1) % artworks.length;
    rotatingArtwork.src = artworks[currentArtwork].src;
    rotatingArtwork.alt = artworks[currentArtwork].alt;
  }, 4000);
}