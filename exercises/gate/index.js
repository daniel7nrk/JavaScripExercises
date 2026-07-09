function runningBalance(t){
    let sum = [];
    let count=0
    for(let i = 0; i<t.length; i++){
        count =(t[i][0]==="credit")?count+=t[i][1]:count-=t[i][1]
        sum.push(count)
    }
    return sum;
}
const t = [  ["credit",  50] ,  ["credit",  50] ,  ["debit",  30] ,  ["debit",  70] ,  ["credit", 20 ]];
console.log(runningBalance(t));// → [100, 150, 120, 30, 50]