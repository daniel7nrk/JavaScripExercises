function removeSmallest(numbers) {
    let results = Math.min(...numbers);
    console.log(results);
    
    let index = numbers.indexOf(results);
    let final = numbers.slice(0,index);
    let final1 = numbers.slice(index+1,numbers.length);
   
    return [...final,...final1]
    
}


console.log(removeSmallest([1,2,3,4,5]))// output = [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4]))// output = [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1]))// output = [2,2,2,1]