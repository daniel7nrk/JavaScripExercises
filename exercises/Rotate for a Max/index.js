function maxRot(num){
    let arr = []
    arr.push(num)
    let str = String(num);
    str = str.slice(1) + str[0];
    arr.push(Number(str))

    for(let j=1;j<str.length-1;j++){

        
        let a = str.slice(0,j)
        let b = str.slice(j)

        b = b.slice(1)+ b[0]

        str = a+b
        arr.push(Number(str))  

    }



    let max = Math.max(...arr) 
    return max

}

console.log(maxRot(56789))    //56789 -> 67895 -> 68957 -> 68579 -> 68597
console.log(maxRot(38458215))   //85821534
console.log(maxRot(195881031))  //988103115
console.log(maxRot(896219342))  //962193428
console.log(maxRot(69418307))   //94183076