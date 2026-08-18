const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  e.target.classList.toggle("lt");
});
