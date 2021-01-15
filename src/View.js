import "./View.css";
import { COLORS } from "./constants";

export default class View {
  constructor() {
    this.nodes = {};

    this._saveDomNodes();
  }

  _saveDomNodes() {
    this.nodes = {
      body: document.body,
      appName: document.getElementById("app-name"),
      login: document.getElementById("login"),
      password: document.getElementById("password"),
      size: document.getElementById("size"),
      resultInput: document.getElementById("result-input"),
      encryptBtn: document.getElementById("encrypt"),
      formInputs: document.querySelectorAll(".form input"),
    };
  }

  show() {
    this.nodes.body.classList.add("displayed");
  }

  addEventListeners(handlers) {
    const { appName, login, encryptBtn, formInputs } = this.nodes;
    const { onClickEncryptBtn, onChangeAppName, onChangeLogin } = handlers;

    appName.addEventListener("input", onChangeAppName);
    login.addEventListener("input", onChangeLogin);
    encryptBtn.addEventListener("click", onClickEncryptBtn);

    formInputs.forEach(input => {
      const label = input.previousElementSibling;
    
      input.addEventListener("focus", () => {
        label.classList.add("movable-span");
         label.style.color = COLORS.dark;
       });
      
      input.addEventListener("focusout", () => {
        label.style.color = COLORS.gray;
        if (!input.value) label.classList.remove("movable-span");
      });
    });
  }
}