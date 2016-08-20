var person = new Object();

// adding properties to person object.

person["firstname"] = "Rajashekhar Goud";
person["lastname"] = "Ramayampeta";

//accessing object properties.

console.log(person["firstname"]);
console.log(person[1]);

// assigning object property to varibale.

var propertyName = "lastname";

console.log(person[propertyName]);

// accessing using dot operator.
console.log(person.firstname + " "+ person.lastname);

person.address = new Object();

 person.address.street = "5252 E 86th street";
 person.address.apt = "202";
 person.address.city ="Indianapolis";
 person.address.state = "IN";
 person.address.zip = "46250";

console.log(person.address);

console.log(person.address.street);
console.log(person["address"]["street"]);