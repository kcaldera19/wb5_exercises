"use strict"

let cart = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 6.00 },
    { product: "Snickers Bar", price: 1.89 },
    { product: "Mounds Bar", price: 1.50 },
    { product: "Sour Patch Kids", price: 3.79 },
    { product: "Everlasting Gobstopper", price: .99 },
    { product: "Ring Pop", price: 1.79 }
];


let under4 = cart.filter((product) => {

    if (product.price < 4) {
        return true
    }
    return false

});
console.log(under4);

let eminem = cart.filter((candy) => {
    if (candy.product.indexOf("M&M") !== -1) {
        return true;
    }
}); 
console.log(eminem);

let weHaveFish = cart.find((carrySwedishFish)=>{
    return carrySwedishFish.product === "Swedish Fish";
})
console.log(weHaveFish);

if(carrySwedishFish){
    console.log("We carry those things")

}else{
    console.log("got o another store for that crap");
}


