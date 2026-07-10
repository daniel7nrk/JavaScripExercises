// function toCamelCase(str) {
//     let indexes = [];

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "-" || str[i] === "_") {
//             indexes.push(i);
//         }
//     }    
//     let chars = str.split("")
//     chars.splice(indexes[0],1)
//     chars[indexes[0]] = chars[indexes[0]].toUpperCase();
//     chars.splice(Number(indexes[1])-1,1)
//     chars[Number(indexes[1])-1] = chars[Number(indexes[1])-1].toUpperCase();
//     console.log(chars);
//     return chars.join("");
// }

function toCamelCase(str) {
    let chars = str.split("");

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "-" || chars[i] === "_") {
            chars.splice(i, 1);
            chars[i] = chars[i].toUpperCase();
            i--; 
        }
    }

    return chars.join("");
}

console.log(toCamelCase("hello-petter_good")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")); // "TheStealthWarrior"



const str = "apple-banana-orange";

let indexes = [];

for (let t in str) {
    if (str[t] === "-") {
        indexes.push(t);
    }
}

console.log(Number(indexes[0])+1); 