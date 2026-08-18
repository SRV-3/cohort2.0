const p = document.querySelector("p");

window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    p.textContent = "SPACE";
  } else {
    p.textContent = e.key;
  }
});
