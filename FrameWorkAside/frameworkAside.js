function getPerson(){

        //here we are returning object literal ,but aftere return statement line , 
        //we hit enter (carriage retutn i.e : nextline) so 
       //java script automatically place semicolon ; at the end of statement

    return  // javascript engine puts ; after return statement like return ;
      {
       	 name : "Ram Gopal Varma"
       }

       

}

console.log(getPerson()); // prints undefined because above reason.


//Immediately Invoked Function Expressions (IIFE).


//function statement

function greetPerson(name){

	console.log("Hello..."+name);

}

greetPerson("Ram Gopal Varma");

//function expression

var greetFunc = function(name){
	  console.log("Hello..."+name);
}

greetFunc("Pablo Esco Bar");

//Immediate;y Invoked Function Expressions.

var greetFunc = function(name){

	  return "Welcome to ..."+name;

}("Ramuism");





//IIFE example on function expression.
var firstname = "Rajashekhar";


(function(lastname){

   console.log("Inside IIFE..."+firstname + " " + lastname);


}("Ramayampeta"));




 