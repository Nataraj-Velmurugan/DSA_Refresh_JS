// is vowel

let chars = ['h', 'e', 'l', 'l', 'o'];

let vowel = ['a', 'e', 'i', 'o', 'u'];

let left = 0, right = chars.length - 1;

let reverseVowel = (chars, vowel) => {
    while (left < right ) {
        let temp;
        if(vowel.includes(chars[left]) && vowel.includes(chars[right])) {
            temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        else if(vowel.includes(chars[left])) {
            right--;
        }
        else {
            left++;
        }

    }

    return chars
}

console.log(reverseVowel(chars, vowel));
