// function one(call_two){
//     call_two()
//     console.log("step 1 complete. please call step 2");

// }

// function two(){
//     console.log("step 2");
// }

// one(two)



let stocks = {
    Fruits : ["strawberry","grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let order = (Fruits_name, call_production) => {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruits_name]} was selected`)
        call_production()
    },2000)
};

let production = () => {
    setTimeout(()=>{
        console.log(`production has started`);
        setTimeout(()=>{
            console.log(`the fruit has been chooped`)
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(()=> {
                    console.log("the machine was started ")
                    setTimeout(()=>{
                        console.log(`ice cream was place on the ${stocks.holder[0]} `)
                        setTimeout(()=>{
                            console.log(`the ${stocks.toppings[1]} was added as the toppings`)
                            setTimeout(() => {
                                console.log(`the ice cream was served`)
                            }, 2000);
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0)
};
order(0,production)

