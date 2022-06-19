import { EventEmitter } from '../libs/EventEmitter';

export class Size extends EventEmitter {
  #rootNode = document.getElementById("size");

  constructor(initialValue) {
    super();
    this.updateValue(initialValue);
    this.reserveEvents('change');
    this.#rootNode.addEventListener("input", this.#onInput.bind(this));
  }

  updateValue(value) {
    this.#rootNode.value = value;
  }

  #onInput() {
    const size = Math.trunc(Math.abs(Number(this.#rootNode.value)));
    this.emit('change', size);
  }
}