//sorting

let a = [4,7,2,1,0,12]
a.sort((a,b) => a-b)
console.log(a);


// 

let names = ['John', 'Mac', 'Peter'];
let length = names.map(name => name.length)
console.log(length);


//

const counter = {
    
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};

counter.next()
counter.next()
counter.next()
console.log(counter.next()); // 1