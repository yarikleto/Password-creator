import hmacSHA3 from 'crypto-js/hmac-sha3';
import Base64 from 'crypto-js/enc-base64';

const REGEXP_OF_VALID_CHAR = /\w/i;

const cutHash = (hash, size) => {
  const HASH_LAST_INDEX = hash.length - 1;
  let result = "";
  let i = 0;
  let level = 0;

  while(result.length !== size) {
    const char = i % 2 ? hash[i] : hash[HASH_LAST_INDEX - i];
    if (char.match(REGEXP_OF_VALID_CHAR)) result += char;
    i = i === HASH_LAST_INDEX ? 0 : i + 1;
  }

  return result;
};

export default class Model {
  encrypt({ text, password, size }) {
    const hash = Base64.stringify(hmacSHA3(text, password));
    return cutHash(hash, size);
  }
}