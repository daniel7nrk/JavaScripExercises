function createReport(orders){
    let result = {
        uniqueProducts: [],
        firstProduct:"",
        totalUnique:0
    }
    let product = []
    for(let order of orders){
        product.push(order.product)
    }
    product = new Set([...product])
    product = [...product]

    result.uniqueProducts = product
    result.firstProduct = product[0]
    result.totalUnique = product.length



    return result
}

const orders= [
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
];

console.log(createReport(orders));


// function createReport(orders) {
//     const products = [...new Set(orders.map(order => order.product))];

//     return {
//         uniqueProducts: products,
//         firstProduct: products[0],
//         totalUnique: products.length
//     };
// }