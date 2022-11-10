
  var hamburger = document.querySelector(".hamburger");
  var nav = document.querySelector(".nav");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });