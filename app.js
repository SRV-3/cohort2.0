const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("input", function (e) {
  span.textContent = 20 - e.target.value.length;
});
