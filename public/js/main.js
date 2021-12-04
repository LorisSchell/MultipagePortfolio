// toggle-mobile-navigation

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

// scroll-up-button

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

// login Form

function onLogin(form) {
  console.log("test login");
}

function onSignUp(form) {
  console.log("test signup")
}

function switchForm() {

}

//validation for datalist

var inputs = document.querySelectorAll("input[list]");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function() {
    var optionFound = false,
      datalist = this.list;
 
    for (var j = 0; j < datalist.options.length; j++) {
        if (this.value == datalist.options[j].value) {
            optionFound = true;
            break;
        }
    }
    
    if (optionFound) {
      this.setCustomValidity("");
    } else {
      this.setCustomValidity("Please select a valid value.");
    }
  });
}