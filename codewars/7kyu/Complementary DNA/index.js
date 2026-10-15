function dnaStrand(dna){
  return dna.split('').map(elem=>{
    switch(elem){
        case 'T':return 'A';
        case 'A':return 'T'
        case "C": return 'G'
        case 'G': return 'C'
    }
  }).join('')
}

console.log(dnaStrand("AAAA"));  // TTTT
console.log(dnaStrand("ATTGC")); // TAACG
console.log(dnaStrand("GTAT"));  // CATA