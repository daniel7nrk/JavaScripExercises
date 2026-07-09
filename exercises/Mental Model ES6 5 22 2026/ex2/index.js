function groupByAndCount(items) {
    let solution={};
    for (const item of items) {
        if(solution[item.type]){
            solution[item.type]++;
        }
        else{
            solution[item.type]=1;
        }
    }
    return solution;
}



const items = [
  { type: 'fruit' },
  { type: 'vegetable' },
  { type: 'fruit' },
  { type: 'fruit' },
  { type: 'vegetable' },
  { type: 'grain' },
];

const counts = groupByAndCount(items);
console.log(counts); 