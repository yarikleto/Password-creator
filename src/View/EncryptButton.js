import { EventEmitter } from '../libs/EventEmitter';

export class EncryptButton extends EventEmitter  {
  #rootNode = document.getElementById("encrypt");

  constructor(initialState) {
    super();
    this.updateValue(initialState);
    this.reserveEvents('click');
    this.#rootNode.addEventListener("click", this.#onClick.bind(this));
  }

  get isDisabled() {
    return this.#rootNode.disabled
  }

  updateValue({ disabled }) {
    this.#rootNode.disabled = disabled;
  }

  changTextToTime(text, timeout) {
    const currentText = this.#rootNode.innerText;
    this.#rootNode.innerText = text;
    setTimeout(() => {
      this.#rootNode.innerText = currentText;
    }, timeout);
  }

  #onClick() {
    this.emit('click');
  }
}