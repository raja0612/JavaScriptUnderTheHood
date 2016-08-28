

function buildFunctions(){
	//empty array 
    var arr = [];

	for(var i = 0; i < 3; i++){

   //adding 3 function objects with each i value to arr
     arr.push(

     	     function(){
                 console.log(i);
     	     }  	

     	)
    }

    return arr;

}

//The getFunctions varible holds the 3 function objects as array elements.
var getFunctions = buildFunctions();

console.log(getFunctions);

getFunctions[0](); // calling first element of array.
getFunctions[1]();
getFunctions[2]();






console.log("************************************************");


function buildFunctions2(){
	//empty array 
    var arr = [];
    
	for(var i = 0; i < 3; i++){
		//as per ES6 Specifications.

		let j = i;

   //adding 3 function objects with each i value to array
     arr.push(

     	     function(){
                 console.log(j);
     	     }  	

     	)
    }

    return arr;

}

//The getFunctions varible holds the 3 function objects as array elements.
var getFunctions2 = buildFunctions2();

console.log(getFunctions2);

getFunctions[0] // first array element as a function

getFunctions2[0](); // calling first element of array.
getFunctions2[1]();
getFunctions2[2]();



console.log("************************************************");


function buildFunctions3(){
	//empty array 
    var arr = [];
    
	for(var i = 0; i < 3; i++){

   //adding 3 function objects with each i value to array
     arr.push(

     	     (function(){
                 
                 return function(j){
                 	console.log(j);
                 }(i)
     	     }) // Immediate Invoked function expression	

     	)
    }

    return arr;

}

//The getFunctions varible holds the 3 function objects as array elements.
var getFunctions3 = buildFunctions3();

console.log(getFunctions3);

getFunctions3[0](); // calling first element of array.
getFunctions3[1]();
getFunctions3[2]();