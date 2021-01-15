const DEFAULT_SIZE = 20;
const COPY_DELAY = 1000;

export default class Controller {
  constructor({ view, model }) {
    this.view = view;
    this.model = model;

    this.view.addEventListeners({
      onClickEncryptBtn: this.handleClickEncryptBtn.bind(this),
      onChangeAppName: this.handleChangeAppName.bind(this),
      onChangeLogin: this.handleChangeLogin.bind(this),

    });
    this.view.show();
  }

  handleChangeAppName() {
    const appName = this.view.nodes.appName;
    appName.value = appName.value.toLowerCase().trim();
  }

  handleChangeLogin() {
    const login = this.view.nodes.login;
    login.value = login.value.toLowerCase().trim();
  }

  handleClickEncryptBtn() {
    const {
      appName, login, password, resultInput, encryptBtn
    } = this.view.nodes;
    const textOfCopyBtn = encryptBtn.innerText;

    if (!login.value || !password.value) {
      resultInput.value = '';
      return;
    }

    resultInput.value = this.model.encrypt({
      appName: appName.value.trim(),
      login: login.value.trim(),
      password: password.value.trim(),
      size: this.getValidSizeHash(),
    });

    resultInput.select();
    document.execCommand("copy");
    encryptBtn.innerText = "Copied!";
    setTimeout(() => {
      encryptBtn.innerText = textOfCopyBtn;
    }, COPY_DELAY);
  }

  getValidSizeHash() {
    const { size } = this.view.nodes;
    return Math.trunc(Math.abs(Number(size.value))) || DEFAULT_SIZE;
  }
}