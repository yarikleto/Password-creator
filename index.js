document.addEventListener('DOMContentLoaded', () => {
    const main = new Main();
    main.init();
});

class Main {
    constructor() {
        this.nodes = {};

        Main.SELF = this;
    }

    cacheDomNodes() {
        this.nodes.text = document.getElementById('text');
        this.nodes.password = document.getElementById('password');
        this.nodes.result = document.getElementById('result');
        this.nodes.encryptBtn = document.getElementById('encrypt');
        this.nodes.dencryptBtn = document.getElementById('dencrypt');
    }

    init() {
        this.cacheDomNodes();
        this.addEventListeners();
    }

    addEventListeners() {
        const { encryptBtn, dencryptBtn, result } = this.nodes;

        encryptBtn.addEventListener('click', this.handleClickEncryptBtn);
        dencryptBtn.addEventListener('click', this.handleClickDencryptBtn);
        result.addEventListener('click', this.handleClickResult);
    }

    encrypt(text, password) {
        return CryptoJS.AES.encrypt(text, password).toString();
    }

    dencrypt(key, password) {
        return CryptoJS.AES.decrypt(key, password).toString(CryptoJS.enc.Utf8);
    }

    handleClickEncryptBtn() {
        const { text, password, result } = Main.SELF.nodes;

        if (!text || !password) return false;

        result.value = Main.SELF.encrypt(text.value, password.value);
    }

    handleClickDencryptBtn() {
        const { text, password, result } = Main.SELF.nodes;

        if (!text || !password) return false;

        result.value = Main.SELF.dencrypt(text.value, password.value);
    }

    handleClickResult() {
        const { result } = Main.SELF.nodes;

        result.select();
        document.execCommand('copy');
        result.value = 'Copied!';
    }
}
