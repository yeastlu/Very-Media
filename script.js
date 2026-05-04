const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-toggle]");
const menu = document.querySelector("[data-menu]");

const syncNav = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
};

syncNav();
window.addEventListener("scroll", syncNav, { passive: true });

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("menu-open");
  toggle.classList.toggle("is-open", isOpen);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("menu-open");
    toggle.classList.remove("is-open");
  });
});
