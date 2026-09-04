function multipleOf3(s) {
  s = s.slice(0, -1);

  let value = 0;
  for (let i = 0; i < s.length; i++) {
    value = value * -2 + Number(s[i]);
  }

  return value % 3 === 0;
}

// const multipleOf3 = /^(?:0*10*10*10*)*0*\$$/;



console.log(multipleOf3( "$" )  )   //  true   ->   0 is divisible by 3
console.log(multipleOf3( "1$" )  )  //  false  ->   1 is not divisible by 3
console.log(multipleOf3( "01$" )  ) //  false  ->  -2 is not divisible by 3
console.log(multipleOf3( "11$" )   )//  false  ->  -1 is not divisible by 3
console.log(multipleOf3( "001$" )  )//  false  ->   4 is not divisible by 3
console.log(multipleOf3( "101$" )  )//  false  ->   5 is not divisible by 3
console.log(multipleOf3( "011$" )  )//  false  ->   2 is not divisible by 3
console.log(multipleOf3( "111$" )  )//  true   ->   3 is divisible by 3