import { encrypt, copyToClipboard } from './helpers';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.model.updateState({
      initialized: true,
    });

    this.view.encryptButton.on('click', this.#onClickEncryptBtn.bind(this));
    this.view.appName.on('change', (value) => this.model.updateState({ appName: value }));
    this.view.login.on('change', (value) => this.model.updateState({ login: value }));
    this.view.password.on('change', (value) => this.model.updateState({ password: value }));
    this.view.size.on('change', (value) => this.model.updateState({ size: value }));
  }

  #onClickEncryptBtn() {
    const { appName, login, password, size } = this.model.getState();

    if (!login || !password) {
      this.model.updateState({
        result: '',
      })
      return;
    }

    const hash = encrypt({
      appName,
      login,
      password,
      size,
    });

    this.model.updateState({
      result: hash,
    });

    copyToClipboard(hash);
    this.view.encryptButton.changTextToTime("Copied!", 1000);
  }
}