const DEFAULT_SIZE = 20;

export default class Controller {
  constructor({ view, model }) {
    this.view = view;
    this.model = model;

    this.view.addEventListeners({
      onClickEncryptBtn: this._handleClickEncryptBtn.bind(this),
      onClickCopyBtn: this._handleClickCopyBtn.bind(this),
    });
  }

  _handleClickEncryptBtn() {
    const { text, password, resultInput } = this.view.nodes;

    if (!text.value || !password.value) return;
    resultInput.value = this.model.encrypt({
      text: text.value,
      password: password.value,
      size: this._getValidSizeHash(),
    });
  }

  _handleClickCopyBtn() {
    const { resultInput, copyBtn } = this.view.nodes;
    const titleOfCopyBtn = copyBtn.innerText;

    resultInput.select();
    document.execCommand("copy");
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerText = titleOfCopyBtn;
    }, 500);
  }

  _getValidSizeHash() {
    const { size } = this.view.nodes;
    return Math.trunc(Math.abs(Number(size.value))) || DEFAULT_SIZE;
  }
}