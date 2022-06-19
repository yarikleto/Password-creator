import { COLORS } from "../constants";
import "./View.css";
import { Body } from './Body';
import { AppName } from './AppName';
import { EncryptButton } from './EncryptButton';
import { Login } from './Login';
import { Password } from './Password';
import { Result } from './Result';
import { Size } from './Size';

export default class View {
  constructor(model) {
    const state = model.getState();

    this.body = new Body(state.initialized);
    this.appName = new AppName(state.appName);
    this.login = new Login(state.login);
    this.password = new Password(state.password);
    this.size = new Size(state.size);
    this.result = new Result(state.result);
    this.encryptButton = new EncryptButton({
      disabled: !state.login || !state.password || !state.size,
    });
  
    model.on('update:initialized', (initialized) => {
      this.body.updateValue(initialized);
    });
    model.on('update:appName', (appName) => {
      this.appName.updateValue(appName);
    });
    model.on('update:login', (login) => {
      this.login.updateValue(login);
    });
    model.on('update:password', (password) => {
      this.password.updateValue(password);
    });
    model.on('update:size', (size) => {
      this.size.updateValue(size);
    });
    model.on('update:result', (result) => {
      this.result.updateValue(result);
    });
    model.on('update', ({ login, password, size }) => {
      this.encryptButton.updateValue({
        disabled: !login || !password || !size,
      });
    });
  }
}