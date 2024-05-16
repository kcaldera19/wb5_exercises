"use strict"

let menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
    { item: "Turkey Sandwitch", price: 5.69 },
    { item: "Taco", price: 8.49 },
    { item: "Spaghetti", price: 10.29 },
    { item: "Hot Dog", price: 3.29 }
    ],
    [   { item: "chicken parmesan", price: 13.69 },
    { item: "chicken alfredo", price: 11.49 },
    { item: "Lasagne", price: 10.29 },
    { item: "Chicken Pot Pie", price: 13.29 },
    { item: "salmon", price: 15.29 }
    ]
];

let meal = 0

if(meal === 0){
    console.log("Breakfast Menu")
    
}

if(meal === 1){
    console.log("Lunch Menu")
    
}

if(meal === 2){
    console.log("Dinner Menu")
    
}
menu[meal].forEach((menuItem)=>{
    console.log(`${menuItem.item} : ${menuItem.price}`)
})