var person = {}; // empty object

console.log(person);

// example of Object literals
var person = {
    
    firstname : "Rajashekhar Goud",
    lastname  : "Ramayampeta",
    // property may contains other object literals
    address   : {
        street : "5252 E 86th Street",
        apt    : "202",
        city   : "Indianapolis",
        state  : "IN" ,
        zip    : "46250"
    }
};

console.log(person);
console.log(person.address.street);

var raja = {
    
    firstname : "Rajashekhar Goud",
    lastname  : "Ramayampeta",
    address   : {
        street : "5252 E 86th Street",
        apt    : "202",
        city   : "Indianapolis",
        state  : "IN" ,
        zip    : "46250"
    }
};

function greet(person){
    console.log("Hi "+person.firstname +" "+person.lastname +" You are living at"+person.address);
}

//passing object as function parameters.
greet({firstname : "Ram Gopal",
    lastname  : "Varma",
    address   : {
        street : "5252 E 86th Street",
        apt    : "202",
        city   : "Indianapolis",
        state  : "IN" ,
        zip    : "46250"
    }
    
})