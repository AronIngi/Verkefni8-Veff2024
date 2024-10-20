import { isString } from './helpers.js';
import { reverse } from "./reverse.js";

export function palindrome(str) {
  if(isString(str))
  {
    if(str === "")
      return false;
    else if(str === reverse(str))
      return true;
  }
  return false;
}
console.assert(palindrome("racecar") === true, "1");
console.assert(palindrome("") === false, "2");
console.assert(palindrome(null) === false, "3");
