import hmacSHA3 from 'crypto-js/hmac-sha3';
import Base64 from 'crypto-js/enc-base64';

import { cutHash } from './cutHash';

export const encrypt = ({ appName, login, password, size }) => {
  const text = appName ? `${appName} ${login}` : login;
  const hash = Base64.stringify(hmacSHA3(text, password));

  return cutHash(hash, size);
};
