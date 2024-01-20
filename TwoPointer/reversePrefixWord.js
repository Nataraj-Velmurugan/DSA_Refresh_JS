// https://leetcode.com/problems/reverse-prefix-of-word/

let word = "abcd", ch = "z"

var reversePrefix = function (word, ch) {

    if(!word.includes(ch)) return word

    for (let i = 0; i < word.length; i++) {

        if (word.length === 0) return word
        else if (i === word.length - 1 && word[i] === ch) return word.split('').reverse().join('')

        if (word[i] === ch) {
            let reverseWord = word.substring(0, i+1)
            return reverseWord.split('').reverse().join('') + word.substring(i+1, word.length);
        }

    }

    
};

console.log(reversePrefix(word, ch))
