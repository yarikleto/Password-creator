export class Body {
  #rootNode = document.body;

  constructor(initialValue) {
    this.updateValue(initialValue);
  }

  updateValue(value) {
    if (value) {
      this.#show();
    } else {
      this.#hide();
    }
  }

  #show() {
    this.#rootNode.classList.add("displayed");
  }

  #hide() {
    this.#rootNode.classList.remove("displayed");
  }
}