function filterPrimeNumbers(num){
    let arr = [];

    for(let i = 0; i < num.length; i++){

        let count = 0;
        let cnum = num[i]
        if(cnum<2)continue;

        for(let j = 1; j<= cnum; j++){
            if(cnum % j === 0) count++;
            if(count>2)break;
        }

        if(count===2) arr.push(cnum) 
    }
    
    return arr

}


let a = [4, -7, 12, -11, 15, 17, 20, 23]
let b = [1, 2, 3, 4, 5, 6]
let c = [91, 92, 93, 97, 98, 99]

console.log(filterPrimeNumbers(a));
console.log(filterPrimeNumbers(b));
console.log(filterPrimeNumbers(c));
