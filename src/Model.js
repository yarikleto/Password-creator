import hmacSHA3 from 'crypto-js/hmac-sha3';
import Base64 from 'crypto-js/enc-base64';

import { compose, cutHash } from './helpers';
export default class Model {
  encrypt({ text, password, size }) {
    const hash = Base64.stringify(hmacSHA3(text, password));

    return compose(
      cutHash(size)
    )(hash);
  }
}