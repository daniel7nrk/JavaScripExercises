function last(...arry) {

    if (arry.length === 1 && typeof arry[0] === "string") {
        return arry[0][arry[0].length - 1];
    }

    // One argument that is an array
    if (arry.length === 1 && Array.isArray(arry[0])) {
        return arry[0][arry[0].length - 1];
    }

    // Multiple arguments
    if (arry.length > 1) {
        return arry[arry.length - 1];
    }
    return arry[0];
}


console.log(last(5))               // =>  5
console.log(last([1, 2, 3, 4]))      // =>  4
console.log(last("xyz"))             // => "z"
console.log(last(1, 2, 3, 4))        // =>  4
console.log(last([1, 2], [3, 4]))    // =>  [3, 4]
console.log(last([[1, 2], [3, 4]]))  // =>  [3, 4]
console.log(last([1, 2, 3, [4, 5]])) // =>  [4, 5]