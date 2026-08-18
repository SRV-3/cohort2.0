const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  if (e.target.style.textDecoration === "line-through") {
    e.target.style.textDecoration = "none";
  } else {
    e.target.style.textDecoration = "line-through";
  }
});
