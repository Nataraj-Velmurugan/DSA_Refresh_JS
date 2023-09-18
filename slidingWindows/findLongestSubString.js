import _ from "lodash";

let str1 = "abcabdcbb";

let str = "pwwkew";

let p = str.split("");
console.log(p)

let pMap = {};

for (let i = 0; i < p.length; i++) {
    if (!pMap[p[i]]) pMap[p[i]] = 1
    else break;
}

let findLongestSubString = () => {
    let sMap = {};
    for (let i = 0; i < p.length; i++) {
        for (let j = i; j < p.length; j++) {
            if (!sMap[p[j]]) sMap[p[j]] = 1
            else break;
        }
        console.log(Object.entries(sMap).length);
        if (Object.entries(sMap).length > Object.entries(pMap).length) pMap = sMap;
        sMap = {};
    }

    return pMap
}

console.log(findLongestSubString());
