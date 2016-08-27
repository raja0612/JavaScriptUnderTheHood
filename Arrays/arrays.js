// Array is a collection of different data types.


var a = [
    
        1, // simple value.
        true, // boolean value.
         
        {
            name : "Ram Gopal varma",
            program : "Ramuism"
        },  // object literal.
    
       function(name){
           console.log("Hi...."+name);
       }  // anonymous function.
    
]

console.log("hi");
console.log(a); // prints whole array.

a[3](a[2].name); // calling array 3 rd elemnet i.e function with value of same array 2 nd element i.e. name = Ram Gopal Varma.