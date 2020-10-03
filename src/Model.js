import hmacSHA3 from 'crypto-js/hmac-sha3';
import Base64 from 'crypto-js/enc-base64';

export default class Model {
  encrypt({ text, password, size }) {
    return Base64.stringify(hmacSHA3(text, password));
  }
}