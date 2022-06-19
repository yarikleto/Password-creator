const ERRORS = {
  unreservedEvent: (event) => {
    console.error(`EventEmitter: the event "${event}" is not reserved`);
  },
};

export class EventEmitter {
  #eventListeners = {};

  on(event, listener) {
    if (!this.#eventListeners[event]) {
      ERRORS.unreservedEvent(event);
      return;
    }

    this.#eventListeners[event].push(listener);
    return () => {
      this.#eventListeners[event].filter(l => l !== listener);
    };
  }

  off(event, listener) {
    if (!this.#eventListeners[event]) {
      ERRORS.unreservedEvent(event);
      return;
    }

    this.#eventListeners[event] = this.#eventListeners[event].filter(l => l !== listener);
  }

  emit(event, ...args) {
    if (!this.#eventListeners[event]) {
      ERRORS.unreservedEvent(event);
      return;
    }

    this.#eventListeners[event].forEach(l => {
      setTimeout(() => l(...args), 0);
    });
  }

  reserveEvents(...events) {
    events.forEach(event => {
      this.#eventListeners[event] = [];
    });
  }
}