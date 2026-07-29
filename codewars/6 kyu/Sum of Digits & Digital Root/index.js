function digitalRoot(n) {
    n=n.toString()
    // console.log(typeof(n));
    // console.log(n.length);
    if(n.length===1) return Number(n)
    // console.log(n.split(""));
    
    function add(num){
        let sum=0
        num = num.toString().split("")
        for(let i = 0; i<num.length; i++){
            sum += Number(num[i])
        }
        return sum
    }

    do{
        n=add(Number(n)).toString()
        // console.log(n);
    }while(n.length>1)

    return Number(n)
}

console.log( digitalRoot(16))// 7 
console.log( digitalRoot(456))// 6 
console.log( digitalRoot(16))//  -->  1 + 6 = 7
console.log( digitalRoot(942))//  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log( digitalRoot(132189))//  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
console.log( digitalRoot(493193))//  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  --> 2

