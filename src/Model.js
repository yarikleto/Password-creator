import { EventEmitter } from './libs/EventEmitter';
export default class Model extends EventEmitter {
  #state = {
    initialized: false,
    appName: '',
    login: '',
    password: '',
    size: 20,
    result: '',
  }

  constructor() {
    super();
    this.reserveEvents(
      'update',
      'update:initialized',
      'update:appName',
      'update:login',
      'update:password',
      'update:size',
      'update:result',
    );
  }

  getState() {
    return this.#state;
  }

  updateState(newState) {
    this.#state = {
      ...this.#state,
      ...newState,
    };

    this.emit('update', this.#state);
    Object.keys(newState).forEach((key) => {
      this.emit(`update:${key}`, this.#state[key]);
    })
  }
}