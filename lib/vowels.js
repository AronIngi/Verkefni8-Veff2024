import { isString } from './helpers.js';

const VOWELS = 'aeiouyáéýúíóöæ'.split('');

export function vowels(str) {
  if(isString(str))
  {
    const words = str.split('');
    var count = 0;
    for(const word of words)
    {
      if(VOWELS.includes(word))
      {
        count++;
      }

    }
    return count;
  }
  return 0;
}
console.assert(vowels("aba") === 2, "1");
console.assert(vowels("") === 0, "2");
console.assert(vowels(null) === 0, "3");
