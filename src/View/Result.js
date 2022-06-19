export class Result {
  #rootNode = document.getElementById("result-input");

  constructor(initialValue) {
    this.updateValue(initialValue);
  }

  updateValue(value) {
    this.#rootNode.value = value;
  }

  copyValue() {
    this.#rootNode.select();
    document.execCommand("copy");
  }
}