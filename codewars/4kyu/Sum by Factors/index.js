// function findFactors(num) {
//     let factors = [];

//     for (let i = 2; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }

//     return [...new Set(factors)];
// }

// console.log(findFactors(12)); // [2, 3, 4, 6, 12]
// console.log(findFactors(15)); // [3, 5, 15]
// console.log(findFactors(14)); // [2, 7, 14]




function sumOfDivided(arrs) {
    const primeFactorsMaker = (num) => {
        let factors = [];

        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                factors.push(i);
            }
        }

        return [...new Set(factors)];
    }
    
    const primeFactors = arrs.map(arr => {
        return primeFactorsMaker(arr);
    });

    let primeFactor = [];

    for (let arr of primeFactors) {
        primeFactor.push(...arr);
    }

    primeFactor = primeFactor.filter(number => {
        if (number < 2) return false;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    });

    
    primeFactor = [...new Set(primeFactor)].sort((a, b) => a - b);

    let result = [];

    for (let prime of primeFactor) {
        let sum = 0;

        for (let number of arrs) {
            if (number % prime === 0) {
                sum += number;
            }
        }

        result.push([prime, sum]);
    }

    return result;
}



console.log(sumOfDivided([12, 15])) // [ [2, 12], [3, 27], [5, 15] ]
console.log(sumOfDivided([15,21,24,30,45]))// [ [2, 54], [3, 135], [5, 90], [7, 21] ]
