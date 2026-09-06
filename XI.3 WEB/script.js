const slides = [
  { img: "database/gallery/fotbar1.png", caption: "OHHH YEAHHH!!!" },
  { img: "database/gallery/fotbar2.png", caption: "WELL YEAHH!!" },
  { img: "database/gallery/fotbar3.png", caption: "HELL YEAHH!!" },
  { img: "database/gallery/fotbar4.png",  caption: "UHH YEAHH!!" },
  { img: "database/gallery/fotbar5.png",  caption: "LOHH YEAHH!!" },
];

let slideIndex = 1;
function buildSlideshow() {
  const slideshow = document.getElementById("slideshow");
  const dotsContainer = document.getElementById("dots-container");
  const nav = slideshow.querySelectorAll(".prev, .next");

  slides.forEach((slide, i) => {
    const div = document.createElement("div");
    div.className = "mySlides fade";
    div.innerHTML = `
      <div class="numbertext">${i + 1} / ${slides.length}</div>
      <img src="${slide.img}" alt="${slide.caption || 'Foto kelas XI.3'}">
      <div class="text">${slide.caption}</div>
    `;
    slideshow.insertBefore(div, nav[0]);

    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => currentSlide(i + 1);
    dotsContainer.appendChild(dot);
  });

  showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const allSlides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > allSlides.length) slideIndex = 1;
  if (n < 1) slideIndex = allSlides.length;

  Array.from(allSlides).forEach(s => s.style.display = "none");
  Array.from(dots).forEach(d => d.classList.remove("active-dot"));

  allSlides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active-dot");
}

document.addEventListener("DOMContentLoaded", buildSlideshow);
