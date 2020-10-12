import "./View.css";

const inputs = document.querySelectorAll('.animation');

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
    };
  }

  addEventListeners(handlers) {
    const { encryptBtn, copyBtn } = this.nodes;
    const {
      onClickEncryptBtn,
      onClickCopyBtn
    } = handlers;

    encryptBtn.addEventListener("click", () => {
      onClickEncryptBtn();
      copyBtn.style.display = "block";
    });
    copyBtn.addEventListener("click", onClickCopyBtn);

    inputs.forEach((item) => {
      const prevSibling = item.previousElementSibling;
    
      item.addEventListener("focus", () => {
         prevSibling.classList.add("movable-span");
         prevSibling.style.color = "#1976d2";
       });
      
      item.addEventListener("focusout", () => {
        prevSibling.style.color = "#757575";
        if (!item.value) prevSibling.classList.remove("movable-span");
      });
    });
  }
}