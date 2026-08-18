const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  input.click();
  input.addEventListener("change", function (e) {
    p.textContent = e.target?.files[0].name;
  });
});
