import { Stack } from '@datastructures-js/stack';


let s = "(()())(())";

let removeOuterParentheses = (s) => {

    let stack = new Stack();
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.size() >= 1) result += s[i]
            stack.push(s[i])

        } else {
            if (stack.size() > 1) result += s[i]
            stack.pop()
        }
    }

    return result

}

removeOuterParentheses(s)
