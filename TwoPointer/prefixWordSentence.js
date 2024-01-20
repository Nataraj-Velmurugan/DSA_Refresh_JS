// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/

let sentence = "i am tired", searchWord = "you"

// sentence = "i love eating burger", searchWord = "burg"

var isPrefixOfWord = function (sentence, searchWord) {

    let j = 0;
    let splitWord = sentence.split(' ');


    for (let i = 0; i < splitWord.length; i++) {

        let tempWord = splitWord[i]

        if (tempWord.length >= searchWord.length)
            if (tempWord.substring(0, searchWord.length) === searchWord) return i + 1
    }

    if (j === 0) return -1
};

console.log(isPrefixOfWord(sentence, searchWord))

