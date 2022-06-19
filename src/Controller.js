import hmacSHA3 from 'crypto-js/hmac-sha3';
import Base64 from 'crypto-js/enc-base64';

import { compose, cutHash, cutHashV2 } from './helpers';

const encrypt = ({ appName, login, password, size }) => {
  const text = appName ? `${appName} ${login}` : login;
  const hash = Base64.stringify(hmacSHA3(text, password));

  return compose(
    cutHash(size)
  )(hash);
}

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

    this.view.result.copyValue();
    this.view.encryptButton.changTextToTime("Copied!", 1000);
  }
}