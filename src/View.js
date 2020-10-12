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
  }
}

inputs.forEach((item) => {
  item.addEventListener("focus", () => {
    item.previousElementSibling.classList.add("spanMove");
    item.previousElementSibling.style.color = "#1976d2";
  });
  item.addEventListener("focusout", () => {
    if (item.value == "") {
      item.previousElementSibling.classList.remove("spanMove");
      item.previousElementSibling.style.color = "#757575";
    } else {
      item.previousElementSibling.style.color = "#757575";
    }
  });
});