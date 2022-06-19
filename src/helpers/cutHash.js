import { isOdd } from './isOdd';

const REGEXP_OF_VALID_CHAR = /\w/i; // numbers and chars
const isValidChar = char => Boolean(char.match(REGEXP_OF_VALID_CHAR));

export const cutHash = size => hash => {
  const HASH_LAST_INDEX = hash.length - 1;
  let result = "";
  let i = 0;
  let level = 0;

  while(result.length !== size) {
    const char = isOdd(i)
      ? hash[i]
      : hash[HASH_LAST_INDEX - i];

    if (isValidChar(char)) result += char;

    if (i === HASH_LAST_INDEX) i = 0;
    else i = i + 1;
  }

  return result;
};

export const cutHashV2 = size => hash => {
  const HASH_LAST_INDEX = hash.length - 1;
  let result = "";
  let i = 0;
  let level = 0;

  while(result.length !== size) {
    const char = isOdd(i)
      ? hash[i]
      : hash[HASH_LAST_INDEX - i];

    result += char;
    i = i === HASH_LAST_INDEX ? 0 : i + 1;
  }

  return result;
};
