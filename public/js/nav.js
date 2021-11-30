const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

const goTopBtn = document.querySelector(".scrollTopBtn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}
goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});