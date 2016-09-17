function greet(whattosay){

    return function(name){
    	console.log(whattosay+" "+name)
    }

}

var sayHI = greet("Hello");
  
//The below line prints the return function of greet.

console.log(sayHI);

/*
    here sayHI contains 

    function(name){
    	console.log(whattosay+" "+name)
    }

  here whattosay varible intially not assigned with value "Hello". because the greet function simply returns 
  the function expression.
    */


 sayHI("Beamer Jack");

 /*
      The above line prints the console.log statement with two varibales values. Eventhough the greet function poped out of execution
      context, defaultly Javascript engine looks for varibales which are defined in outer function.
*/


function add(a){

	 return function(b){
	 	console.log("a and b values are.."+ a +"&"+b);  
	 	console.log("addition of a & b are",(a+b));
	 }
}

var addition = add(5);
console.log(addition);
addition(6);

   











