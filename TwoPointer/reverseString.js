// reverse the given string

let a = "hello";

let charArray = a.split('');

let i = 0, j = charArray.length-1;

while(i < j) {

    let temp = charArray[i];
    charArray[i++] = charArray[j];
    charArray[j--] = temp

}

console.log(charArray);
