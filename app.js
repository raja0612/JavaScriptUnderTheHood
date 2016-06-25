// pass by value

var a = 10;
var b =a;

console.log(a);
console.log(b);

a = 20;
console.log(a);
console.log(b);

// all primitive types in java script are pass by value.

// pass by reference

var c = {greetings:"Hello"};

var d = c;

d.greetings = "Namaste"; // mutate object c value . so both c & d values will be updated.

consle.log(c);
console.log(d);

// all objects and functions in java script are pass by refernce.