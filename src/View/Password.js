import { EventEmitter } from '../libs/EventEmitter';
import { addMovableInputLabel } from '../helpers';

export class Password extends EventEmitter {
  #rootNode = document.getElementById("password");

  constructor(initialValue) {
    super();
    this.updateValue(initialValue);
    this.reserveEvents('change');
    this.#rootNode.addEventListener("input", this.#onInput.bind(this));
    addMovableInputLabel(this.#rootNode);
  }

  updateValue(value) {
    this.#rootNode.value = value;
  }

  #onInput() {
    const value = this.#rootNode.value
      .toLowerCase()
      .replace(/\s/g, '');

      this.emit('change', value);
  }
}