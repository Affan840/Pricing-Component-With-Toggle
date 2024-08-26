let toggle = document.querySelector(".toggle");
let amount = document.querySelectorAll("article h1");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  if (toggle.classList.contains("active")) {
    amount.forEach((value) => {
      let price = parseFloat(value.textContent.slice(1)) * 10;
      price = Math.round(price * 100) / 100;
      value.textContent = `$${price.toFixed(2)}`;
    });
  } else {
    amount.forEach((value) => {
      let price = parseFloat(value.textContent.slice(1)) / 10;
      value.textContent = `$${price.toFixed(2)}`;
    });
  }
});
