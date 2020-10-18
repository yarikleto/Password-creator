import "./View.css";
import { COLORS } from "./constants";

export default class View {
  constructor() {
    this.nodes = {};

    this._saveDomNodes();
  }

  _saveDomNodes() {
    this.nodes = {
      text: document.getElementById("text"),
      password: document.getElementById("password"),
      size: document.getElementById("size"),
      resultInput: document.getElementById("result-input"),
      encryptBtn: document.getElementById("encrypt"),
      copyBtn: document.getElementById("copy-btn"),
      formInputs: document.querySelectorAll(".form input"),
    };
  }

  addEventListeners(handlers) {
    const { encryptBtn, copyBtn, formInputs } = this.nodes;
    const { onClickEncryptBtn, onClickCopyBtn } = handlers;

    encryptBtn.addEventListener("click", onClickEncryptBtn);
    copyBtn.addEventListener("click", onClickCopyBtn);

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