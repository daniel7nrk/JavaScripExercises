function lettersToNumbers(str) {
  let total = 0;
  for (const ch of str) {
    if (ch >= 'a' && ch <= 'z') {
      total += ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (ch >= 'A' && ch <= 'Z') {
      total += (ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1) * 2;
    } else if (ch >= '0' && ch <= '9') {
      total += Number(ch);
    }
  }
  return total;
}

console.log(lettersToNumbers("I Love You")); // 170
console.log(lettersToNumbers("ILoveYou")); // 170
console.log(lettersToNumbers("ARE YOU HUNGRY?")); // 356
console.log(lettersToNumbers("oops, i did it again!")); // 152
console.log(lettersToNumbers("Give me 5!")); // 73
console.log(lettersToNumbers("Give me five!")); // 110
