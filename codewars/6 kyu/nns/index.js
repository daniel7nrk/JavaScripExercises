var encryptThis = function(text) {

  if (!text) return "";
  if (text.length === 1) return text.charCodeAt(0).toString();

  return text.split(" ").map(word => {
    if (word.length === 1) {
      return word.charCodeAt(0).toString();
    }

    const chars = word.split("");
    const ascii = chars[0].charCodeAt(0);

    if (chars.length === 2) return ascii + chars[1];

    [chars[1], chars[chars.length - 1]] = [chars[chars.length - 1], chars[1]];

    return ascii + chars.slice(1).join("");
  }).join(" ");
};

console.log(encryptThis("A"))// "65"
console.log(encryptThis("A wise old owl lived in an oak"))// "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis("The more he saw the less he spoke"))// "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis("The less he spoke the more he heard"))// "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis("Why can we not all be like that wise old bird"))// "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 11１dl 98dri"
console.log(encryptThis("Thank you Piotr for all your help"))// "84kanh １2１uo 80roti １0２ro 97ll １2１ruo １0４ple"    