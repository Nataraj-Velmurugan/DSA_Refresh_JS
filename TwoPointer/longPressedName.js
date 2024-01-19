let name = "saeed", typed = "ssaaedd"

var isLongPressedName1 = function (name, typed) {

    let typObj = {}
    let nameObj = {}

    for (let i = 0; i < typed.length; i++) {
        if (i < name.length) nameObj[name[i]] = (nameObj[name[i]] ?? 0) + 1;
        typObj[typed[i]] = (typObj[typed[i]] ?? 0) + 1;
    }

    let result = true;

    for (let i in nameObj) {

        if (typObj[i] >= nameObj[i]) result
        else result = false
    }

    console.log(nameObj)
    console.log(typObj)

    console.log(result)
};


let isLongPressedName = (name, typed) => {

    let j = 0;

    for (let i = 0; i < name.length; i++) {
        let s = 0;
        while (j < typed.length) {
            if (name[i] !== typed[j]) break
            j++
            s++
        }

        if (s === 0) return false

    }

    return true

}

console.log(isLongPressedName(name, typed));
