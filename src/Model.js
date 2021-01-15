import hmacSHA3 from 'crypto-js/hmac-sha3';
import Base64 from 'crypto-js/enc-base64';
import { sha3_512 } from './libs/SHA3';

import { compose, cutHash, cutHashV2 } from './helpers';
export default class Model {
  encrypt({ appName, login, password, size }) {
    const text = appName ? `${appName} ${login}` : login;
    const hash = Base64.stringify(hmacSHA3(text, password));

    console.clear();
    console.warn(`
      USE THIS HASH if you don't want to use an external crypto library (this app is using it),
      because there is less control over the code, or you want to check the security,
      doing local copy the app, etc.

      Otherwise, this hash will never change, because
      it uses the local SHA3 implementation.
      And you can check the security of the code of local SHA3 implementation.

      !!!The old implementation didn't delete for backward compatibility!!!
    `);
    console.log(
      '----------------\n',
      compose(
        cutHashV2(size)
      )(sha3_512(text + password)),
      '\n----------------',
    );

    return compose(
      cutHash(size)
    )(hash);
  }
}
