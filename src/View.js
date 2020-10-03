import "./View.css";

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
    const { encryptBtn, dencryptBtn, copyBtn } = this.nodes;
    const {
      onClickEncryptBtn,
      onClickCopyBtn
    } = handlers;

    encryptBtn.addEventListener("click", onClickEncryptBtn);
    copyBtn.addEventListener("click", onClickCopyBtn);
  }
}