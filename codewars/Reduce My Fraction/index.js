function reduce(fraction) {
    if((fraction[1]===1)||(fraction[0]===1)) return fraction

    for(let i = 2; i<Math.max(...fraction);i++){
        
        if ((fraction[0]%i===0)&&(fraction[1]%i===0)){
            do{
                fraction[0] = fraction[0]/i 
                fraction[1] = fraction[1]/i 
            }while((fraction[0]%i)===0&&(fraction[1]%i===0));
        }

    }
    return fraction
}

// function reduce([numerator, denominator]) {
//     function gcd(a, b) {
//         while (b !== 0) {
//             [a, b] = [b, a % b];
//         }
//         return a;
//     }

//     const divisor = gcd(numerator, denominator);
//     return [numerator / divisor, denominator / divisor];
// }

console.log(reduce([60, 20]))// [3, 1]
console.log(reduce([80, 120]))// [2, 3]
console.log(reduce([4, 2]))// [2, 1]
console.log(reduce([45, 120]))// [3, 8]
console.log(reduce([1000, 1]))// [1000, 1]
console.log(reduce([1, 1]))// [1, 1]
