function myFunction() {
  const hiddenMenu = document.querySelector(".hidden-menu");

  if (hiddenMenu.classList.contains("hide")) {
    hiddenMenu.classList.remove("hide");
  } else {
    hiddenMenu.classList.add("hide");
  }
}

//MAKING A CAPTCHA CODE !

const captchaTxt = document.querySelector(".captcha-text");
const captchaInput = document.querySelector(".captcha-input");
const captchaReload = document.querySelector(".captcha-reload");

function makeCaptcha(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnonpqrstuvwxyz0123456789";
  const characterLength = characters.length;

  for (i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return result;
}

captchaTxt.value = makeCaptcha(7);

captchaReload.addEventListener("click", () => {
  captchaTxt.value = makeCaptcha(7);
  captchaCorrect.style.opacity = "0";
  init(captchaInput); //using the function for initiation position in captcha input field.
});

/******************************/
//HANDLING A CAPTCHA INPUT * CORRECT OR INCORRECT
const nameField = document.querySelector(".name");
const emailField = document.querySelector(".email");
const textField = document.querySelector(".message");
const btn = document.querySelector(".send");
const warningTxt = document.querySelector(".warning-text");
const submitBtn = document.querySelector(".send");
const captchaCorrect = document.querySelector(".captcha-correct");

btn.addEventListener("click", (event) => {
  if (captchaTxt.value != captchaInput.value) {
    event.preventDefault(); //In case of wrong or empty captcha, no form submit.
    warningTxt.innerHTML =
      "Captcha input is either incorrect or empty. Please try again.";
    warningTxt.style.marginTop = "10px";
    captchaInput.style.border = "2px solid red";
  } else {
    warningTxt.innerHTML = "Message is being sent.";
    warningTxt.style.marginTop = "10px";
    captchaCorrect.style.opacity = "1";
    captchaInput.style.border = "1px solid green";
  }
});

function init(inputName) {
  inputName.style.backgroundColor = "#676767";
  inputName.style.border = "none";
  inputName.value = "";
  warningTxt.innerHTML = "";
}
