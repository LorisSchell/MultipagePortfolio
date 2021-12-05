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
  var logInData = {};
  var logInForm = document.querySelector(".form-login");
  logInData.email = logInForm.email.value;
  logInData.password = logInForm.password.value;
  logInData.rememberMe = logInForm.RememberMe.checked;
  console.log(JSON.stringify(logInData, null, 1));
}

function onSignUp(form) {
  var signUpData = {};
  var signUpForm = document.querySelector(".form-sign_up");
  var gender = document.getElementsByName("gender");

  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) signUpData.gender = gender[i].value;
  }
  signUpData.firstname = signUpForm.firstname.value;
  signUpData.lastname = signUpForm.lastname.value;
  signUpData.email = signUpForm.email.value;
  signUpData.password = signUpForm.password.value;
  signUpData.fav_club = signUpForm.fav_club.value;
  console.log(JSON.stringify(signUpData, null, 1));
}

function switchFormToLogin() {
  var logInForm = document.querySelector(".form-login");
  var signUpForm = document.querySelector(".form-sign_up");

  logInForm.setAttribute("data-visible", true);
  signUpForm.setAttribute("data-visible", false);
}

function switchFormToSignUp() {
  var logInForm = document.querySelector(".form-login");
  var signUpForm = document.querySelector(".form-sign_up");

  logInForm.setAttribute("data-visible", false);
  signUpForm.setAttribute("data-visible", true);
}

//validation for datalist

var inputs = document.querySelectorAll("input[list]");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function () {
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
