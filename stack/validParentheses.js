/**
 * @param {string} s
 * @return {boolean}
 */

import { Stack } from '@datastructures-js/stack';

let s = '(()[]{})'

var isValid = function(s) {
    
    let sObj = {
        ")":"(",
         "}":"{",
          "]":"["
    }

    let stack = new Stack();


    for(let i=0; i<s.length; i++) {
        if(stack.peek() === sObj[s[i]]) {
            stack.pop();
        }
        else stack.push(s[i])
    }


    return stack.isEmpty();
};

console.log(isValid(s))
