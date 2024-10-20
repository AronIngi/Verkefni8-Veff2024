import { isString, splitOnWhitespace } from './helpers.js';

export function longest(str) {
  if(isString(str))
  {
    var longest_word = "";
    var words = splitOnWhitespace(str);
    for(const word of words)
    {
      if(word.length > longest_word.length)
      {
        longest_word = word;
      }
    }
    return longest_word;
  }
  return null;
}
console.assert(longest("a ab") === "ab");
console.assert(longest("") === "");
console.assert(longest(null) === null);
