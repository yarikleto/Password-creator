import View from "./View";
import Model from "./Model";
import Controller from "./Controller";

const view = new View();
const model = new Model();
const controller = new Controller({ view, model });

const encryptBtn = document.querySelector(".enc-btn");
const messageInp = document.querySelector("#text");
const passwordInp = document.querySelector("#password");
const sizeInp = document.querySelector("#size");
const formMessage = document.querySelector(".form__message");
const formPassword = document.querySelector(".form__password");

encryptBtn.addEventListener("click", () => {
  switch(true) {
    case messageInp.value.length === 0 && passwordInp.value.length == 0:
      formMessage.style.borderBottomColor = '#FF0000';
      formPassword.style.borderBottomColor = '#FF0000';
    break;

    case messageInp.value.length === 0:
      formMessage.style.borderBottomColor = '#FF0000';
    break;
    
    case passwordInp.value.length == 0:
      formPassword.style.borderBottomColor = '#FF0000';
    break;

    default:
      messageInp.value = "";
      passwordInp.value = "";
      sizeInp.value = "";
  }
});

function changeColorBorder(input, form) {
  input.addEventListener("focus", () => {
    form.style.borderBottomColor = '#8f8f8f';
  });
}

changeColorBorder(messageInp, formMessage);
changeColorBorder(passwordInp, formPassword);