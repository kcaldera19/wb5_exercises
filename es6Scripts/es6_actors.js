"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

let academyID = academyMembers.find((iD187) => {
    if (iD187.memID === 187) {
        return true
    }
    return false

});
console.log("Member with the id of 187 " + academyID.name);

console.log("---------------------------------------------")

// let atLeast3 = academyMembers.filter((actor)=>{
//     return actor.films.length >= 3;
// });
// console.log(atLeast3);

console.log("---------------------------------------------")

let atLeast3 = academyMembers.filter((actor) => {
    return actor.films.length >= 3;
});
atLeast3.forEach((actor) => {
    console.log(actor.name);
})




let bobNames = academyMembers.filter((startswithBob) => {
    if (startswithBob.name.indexOf("Bob") === 0) {
        return true;
    }

});
console.log(bobNames);


let startswithA = academyMembers.filter((members) => {
    for (let i = 0; i < members; i++)
        if (members.films[i].indexOf("A") === 0) {
            return true;
        }
        return false;
    }
    
});
    
   
    
console.log(startswithA);

