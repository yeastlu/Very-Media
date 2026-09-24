const slides = Array.from(document.querySelectorAll("[data-slide]"));
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const counter = document.querySelector("[data-counter]");
const progress = document.querySelector("[data-progress]");

let current = 0;

const pad = (value) => String(value).padStart(2, "0");

const render = () => {
  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === current);
    slide.setAttribute("aria-hidden", index === current ? "false" : "true");
  });

  const total = slides.length;
  counter.textContent = `${pad(current + 1)} / ${pad(total)}`;
  progress.style.width = `${((current + 1) / total) * 100}%`;
  window.location.hash = slides[current].id;
};

const goTo = (index) => {
  current = (index + slides.length) % slides.length;
  render();
};

prevButton.addEventListener("click", () => goTo(current - 1));
nextButton.addEventListener("click", () => goTo(current + 1));

window.addEventListener("keydown", (event) => {
  const forwardKeys = ["ArrowRight", "ArrowDown", "PageDown", " "];
  const backwardKeys = ["ArrowLeft", "ArrowUp", "PageUp"];

  if (forwardKeys.includes(event.key)) {
    event.preventDefault();
    goTo(current + 1);
  }

  if (backwardKeys.includes(event.key)) {
    event.preventDefault();
    goTo(current - 1);
  }

  if (event.key === "Home") {
    event.preventDefault();
    goTo(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    goTo(slides.length - 1);
  }
});

window.addEventListener("hashchange", () => {
  const target = slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
  if (target >= 0 && target !== current) {
    current = target;
    render();
  }
});

const initial = slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
if (initial >= 0) {
  current = initial;
}

render();
