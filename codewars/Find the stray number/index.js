function stray(numbers) {
    let count = 0;
    let num2 = new Set(numbers);
    num2 = [...num2]
  
    for (let i = 0; i < numbers.length; i++) {
        if (num2[0] === numbers[i]) {
            count++
        }
    }

    return (count === 1)?num2[0]:num2[1]


}




console.log(stray([1, 1, 2])); // 2
console.log(stray([1, 2, 1])); // 2
console.log(stray([6, 7, 7, 7, 7, 7])); // 6
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
