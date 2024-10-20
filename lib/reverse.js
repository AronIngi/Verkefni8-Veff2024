import { isString } from './helpers.js';

export function reverse(str) {
  if(isString(str))
  {
    var words = str.split('');
    var reverse = str.split('');
    var j = words.length-1;
    var i = 0;
    while(j >= 0)
    {
      reverse[i] = words[j];
      i++;
      j--;
    }
    return reverse.join("");
  }
  return null;
}
console.assert(reverse("abc") === "cba");
console.assert(reverse("") === "");
console.assert(reverse(null) === null);
