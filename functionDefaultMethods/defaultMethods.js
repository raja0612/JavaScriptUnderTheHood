//In Java Script each function has 3 default methods.
/*
   1.apply
   2.bind
   3.call
*/




// Declaration of Person object literal


var person = {

    firstname : "Rajashekhar Goud",
    lastname  :  "Ramayampeta",

    getFullName : function(){

    	          var fullname = this.firstname + " "+this.lastname;
    	          return fullname;
                }

}

var personLog = function(lang1,lang2){

	console.log("Logged..."+this.getFullName());
	console.log("--------------------------");
	console.log("languages are..."+lang1 + " "+lang2);
}

//Here functionname.bind creates the copy of object we are passing.

var personBind = personLog.bind(person,"english","spanish");


//personLog();

personBind();

/*var personLog = function(lang1,lang2){
	console.log("Logged..."+this.getFullName());
}.bind(person);

personLog();
*/


// call keyword apply on function to call the functions.
personLog.call(person,"english","telugu");

personLog.apply(person,["Tamil","Sanskrit"])


