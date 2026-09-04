function brightest(colors){
    // for (let color of colors) {
    //     if (color === "#FFFFFF") {
    //         return color;
    //     }
    // }

    // for(let i = 0; i<colors.length;i++){
    //     colors[i] = colors[i].slice(1)
    // }

    // // console.log(colors);
    
    // let brightestColor = colors[0];
    // for (let i = 1; i < colors.length; i++) {
    //     if(parseInt(colors[i], 16)>brightestColor)brightestColor=colors[i]
    // }
    // return '#'+ brightestColor

    let bestColor = colors[0];
    let bestValue = 0;

    for (let color of colors) {
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5, 7), 16);

        let value = Math.max(r, g, b);

        if (value > bestValue) {
            bestValue = value;
            bestColor = color;
        }
    }

    return bestColor;

}




console.log(brightest(["#001000", "#000000"]));// "#001000"
console.log(brightest(["#ABCDEF", "#123456"]));// "#ABCDEF"
console.log(brightest(["#00FF00", "#FFFF00"]));// "#FFFF00"
console.log(brightest(["#FFFFFF", "#1234FF"]));// "#FFFFFF"
console.log(brightest(["#FFFFFF", "#123456", "#000000"]));// "#FFFFFF"
console.log(brightest(["#C114FA", "#110234", "#FCD727"]));// "#C114FA"