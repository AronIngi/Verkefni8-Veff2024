import { isString } from './helpers.js';

const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

export function consonants(str) {
  if(isString(str))
  {
    const words = str.split('');
    var count = 0;
    for(const word of words)
    {
      if(CONSONANTS.includes(word))
      {
        count++;
      }

    }
    return count;
  }
  return 0;
}
console.assert(consonants("aba") === 1, "1");
console.assert(consonants("") === 0, "2");
console.assert(consonants(null) === 0, "3");
