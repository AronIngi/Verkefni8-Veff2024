/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { palindrome } from './lib/palindrome.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';

const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

function display_output(str)
{
    document.querySelector(".output").classList.remove("hidden");

    const input_element = document.querySelector(".input");
    const longest_element = document.querySelector(".longest");
    const shortest_element = document.querySelector(".shortest");
    const vowels_element = document.querySelector(".vowels");
    const consonants_element = document.querySelector(".consonants");
    const palindrome_element = document.querySelector(".palindrome");
    const reverse_element = document.querySelector(".reversed");

    input_element.innerHTML = str;
    longest_element.innerHTML = longest(str);
    shortest_element.innerHTML = shortest(str);
    vowels_element.innerHTML = vowels(str);
    consonants_element.innerHTML = consonants(str);
    palindrome_element.style.display = palindrome(str) ? "none" : "inline";
    reverse_element.innerHTML = reverse(str);
}

document.querySelector("#string").addEventListener("input", function() {
    let str = this.value;
    display_output(str);
});

const form = document.querySelector(".string-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(this);

    for(const pair of data.entries())
    {
        display_output(pair[1]);
    }
});

form.addEventListener("reset", (e) => {
    e.preventDefault();
    document.querySelector("#string").value = "";
    document.querySelector(".output").classList.add("hidden");
});
