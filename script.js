"use-strict";

const input = document.querySelector(".cta__input");
const inputBtn = document.querySelector(".cta__btn");
const inputError = document.querySelector(".cta__input--error");

const validateEmail = function (email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

inputBtn.addEventListener("click", () => {
  if (!validateEmail(input.value)) {
    input.style.border = "1px solid #ff5263";
    inputError.classList.add("show");
  } else {
    input.style.border = "1px solid #c2d3ff";
    inputError.classList.remove("show");
  }
});
