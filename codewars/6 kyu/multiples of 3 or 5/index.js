function solution(number){
  let ans=[]
  for(let i = 0; i<number; i++){
    if((i%3===0)||(i%5===0))ans.push(i)
  }
  return ans.reduce((acc, init)=>{
    return acc+init
  },0)
}

console.log(solution(20)) // 78