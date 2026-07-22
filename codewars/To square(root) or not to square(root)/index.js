function squareOrSquareRoot(arrays) {
    for(let i =0; i<arrays.length;i++){
        if(Math.sqrt(arrays[i])%1===0){
            arrays[i] = Math.sqrt(arrays[i])
            continue;
        }
        arrays[i] = arrays[i]*arrays[i]
    }
    return arrays

    
    // return array.map(num => {
    //     const sqrt = Math.sqrt(num);
    //     return sqrt % 1 === 0 ? sqrt : num * num;
    // });

}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))// [ 2, 9, 3, 49, 4, 1 ]
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]))// [ 10, 10201, 25, 25, 1, 1 ]
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]))// [ 1, 4, 9, 2, 25, 36 ]