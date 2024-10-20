import { isString, splitOnWhitespace } from './helpers.js';

export function shortest(str) {
  if(isString(str))
  {
    var shortest_word = str;
    var words = splitOnWhitespace(str);
    for(const word of words)
    {
      if(word.length < shortest_word.length)
      {
        shortest_word = word;
      }
    }
    return shortest_word;
  }
  return null;
}
console.assert(shortest("a ab") === "a");
console.assert(shortest("") === "");
console.assert(shortest(null) === null);
