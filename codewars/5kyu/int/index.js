function ipsBetween(start, end){
    // let A = 256**3
    // let B = 256**2
    // let C = 256**1
    // let D = 256**0
    // console.log(A);
    // console.log(B);
    // console.log(C);
    // console.log(D);

    let power = [256**3,256**2,256**1,256**0]
    // console.log(math);

    start = start.split(".")
    end = end.split(".")

    
    // for (let i = 0;i<start.length;i++){
    //     start[i] = +start[i]
    //     end[i] = +end[i]
    // }
    let sumStart=0
    let sumEnd =0
    // console.log(start);
    // console.log(end);
    for (let i = 0;i<4;i++){
        sumStart += +start[i]*power[i]
        sumEnd += +end[i]*power[i]
    }

    // console.log(sumStart);
    // console.log(sumEnd);

    return (-sumStart + sumEnd) //+ 1
}



console.log(ipsBetween("150.0.0.0", "150.0.0.1")); // 1
console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // 246
console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
console.log(ipsBetween("160.0.0.0", "160.0.1.0")); // 256
console.log(ipsBetween("170.0.0.0", "170.1.0.0")); // 65536
console.log(ipsBetween("50.0.0.0", "50.1.1.1")); // 65793
console.log(ipsBetween("180.0.0.0", "181.0.0.0")); // 16777216
console.log(ipsBetween("1.2.3.4", "5.6.7.8")); // 67372036
console.log(ipsBetween("0.0.0.0", "255.255.255.255")); // 4294967295