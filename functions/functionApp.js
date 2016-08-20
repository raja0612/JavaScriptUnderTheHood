// functions are objects.

// In JavaScript , function are first class functions, which means everything we can do with other types ,we can do same thing with functions.
// example we can assign values, objects.

function greet(){
    console.log("Hi Ram Gopal Varma");
}

//assigning property name "language" to greet function.
greet.language = "English";

console.log(greet);

console.log(greet.language);

greet(); // calling greet function.


/*
function can be assigned to varibale.
This is called function expression, because the below anonymous function returns whole function from memory.
so variable anonymousGreet points the address of anonymous function.
*/


var anonymousGreet = function (){
    console.log("Hi...!");
}

anonymousGreet(); // calling anonymous function with name anonymousGreet.

//anonymous function with parameters
var greetWithName = function(name){
    console.log("Hi...",name);
}

greetWithName("Raja"); // calling anonymous function with parameter with 


// function can be passed to other function parameters.


//here varible pointing to anonymous function that takes object as parameter.
var add = function (object){
    //parameter object is pointing Javascript object with name as object.
  console.log("addition of a & b..",(object.a+object.b)); 
}

//add is pointing function, and it's passing whole object as a parameter.
add({
      a:10,
      b:20
}
);


function log(a){
   console.log(a.greet);
}

log({greet:"Hello Wold"});



function otherLog(a){
   a();
}

otherLog(
    function(){
        console.log("Passing this anonymous function to other function.So this function will be called in that function code");
    }
);