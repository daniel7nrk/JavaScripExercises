function sum(data){
    for(let i=0;i<data.length;i++){
        let d = data[i]
        d.sort((a,b)=>(a-b))
        console.log(d);
    }
    let sum = 0
    for(let i=0; i<data.length;i++){
        sum += data[i][0]
    }
    return sum    
}

let data = [ [ 5, 3, 2, 4, 1 ]        //  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        // minimum value of row is 5
, [ 21, 20, 14, 156, 100 ]  // minimum value of row is 20
]

console.log(sum(data))