function firstDup(string) {
    const seen = new Set();
    for (const char of string) {
        if (seen.has(char)) return char;
        seen.add(char);
    }
    return undefined;
}

console.log(firstDup('tt'))// 't'
console.log(firstDup('t'))// undefined
console.log(firstDup(''))// undefined
console.log(firstDup('tweet'))// 't'
console.log(firstDup('Ode to Joy'))// ' '
console.log(firstDup('ode to joy'))// 'o'
console.log(firstDup('bar'))// undefined
console.log(firstDup('123123'))// '1'
console.log(firstDup('!@#$!@#$'))// '!'
console.log(firstDup('1a2b3a3c'))// 'a'
