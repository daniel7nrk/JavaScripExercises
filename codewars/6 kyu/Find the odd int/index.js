function findOdd(A) {
  const counts = {};
  for (const n of A) {
    counts[n] = (counts[n] || 0) + 1;
  }
  for (const n in counts) {
    if (counts[n] % 2 !== 0) return Number(n);
  }
}

    console.log(findOdd([7]));//7
    console.log(findOdd([0]));//0
    console.log(findOdd([1,1,2]));//2
    console.log(findOdd([0,1,0,1,0]));//0
    console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));//4
    console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));//5
    console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));// -1
    console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));// 5
    console.log(findOdd([10]));// 10
    console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));// 10
    console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));// 1
