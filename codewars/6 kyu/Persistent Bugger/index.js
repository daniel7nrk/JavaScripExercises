function persistence(num) {
    
    let check =(n)=>{
        if(split(n).length>1){
            return true
        }else{
            return false
        }
    }
    let split=(n)=>{
        return String(n).split('').map(Number);
    }
    let multi = (a)=>{
        return a.reduce((a, c) => a * c, 1);
    }

    let count = 0;
    let result = num;

    while (check(result)) {
        result = multi(split(result));
        count++;
    }

    return count;
}
    console.log(persistence(39))//3
    console.log(persistence(4))//0
    console.log(persistence(25))//2
    console.log(persistence(999))//4
