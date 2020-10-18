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
      inputs: document.querySelectorAll(".animation"),
    };
  }

  addEventListeners(handlers) {
    const { encryptBtn, copyBtn, inputs } = this.nodes;
    const {
      onClickEncryptBtn,
      onClickCopyBtn
    } = handlers;

    encryptBtn.addEventListener("click", onClickEncryptBtn);
    copyBtn.addEventListener("click", onClickCopyBtn);

    inputs.forEach((item) => {
      const prevSibling = item.previousElementSibling;
    
      item.addEventListener("focus", () => {
         prevSibling.classList.add("movable-span");
         prevSibling.style.color = COLORS.dark;
       });
      
      item.addEventListener("focusout", () => {
        prevSibling.style.color = COLORS.gray;
        if (!item.value) prevSibling.classList.remove("movable-span");
      });
    });
  }
}