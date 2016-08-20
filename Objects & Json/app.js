// pass by value

var a = 10;
var b = a; // here b sits at different address in browser.(ex: a is at 101 address, b is at 102)

console.log(a); // prints value 10
console.log(b); // prints value 10

a = 20;
console.log(a); // prints value 20.
console.log(b); // prints value 10.

// conclusion : all primitive types in java script are pass by value.

// pass by reference

var c = {greetings:"Hello"}; // here c is an object type.
console.log(c.greetings); // prints Hello.

var d = c; // d points c address. so whatever updates are done on d object will effects on c.

d.greetings = "Namaste"; // mutate object c value . so both c & d values will be updated.

console.log(c);  // prints Namaste
console.log(d);  // prints Namaste

// conclusion : all objects and functions in java script are pass by refernce.It will same for functions also.