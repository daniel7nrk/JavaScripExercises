function decomp(n) {
  function primeNumber(n) {
    let arr = [];
    for (let num = 2; num <= n; num++) {
      let count = 0;
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) count++;
      }
      if (count === 2) arr.push(num);
    }
    return arr;
  }

    function fact(num) {
        let result = 1n;
        for (let i = 2n; i <= BigInt(num); i++) {
        result *= i;
        }
        return result;
    }

  function div(fac, bign) {
    let count = 0;
    let rt = [];
    let bigFac = BigInt(fac);

    while (bign % bigFac === 0n) {
      bign /= bigFac;
      count++;
    }

    count === 1 ? rt.push(fac) : rt.push(fac, "^", count);

    return rt.join("");
  }

  let bign = fact(n);
  let arr = primeNumber(n);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(div(arr[i], bign));
  }

  return result.join(" * ");
}

console.log(decomp(17));    // "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17"
console.log(decomp(5)  )    // "2^3 * 3 * 5"
console.log(decomp(22) )    // "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
console.log(decomp(14) )    // "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13"
console.log(decomp(25) )    // "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"
// console.log(decomp(215)) 
// console.log(decomp(4000) )


// function fact(num) {
// return num === 1 ? 1 : num * fact(num - 1);
// }