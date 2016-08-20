// Javascript Object:

// Java script object key and value pair could be defined in double quotes.

var javascriptObject = {
    
      firstname : "Ram Gopal",
      lastname : "Varma"
}

console.log("JavaScript Object",javascriptObject);

// Json , in json key and value pairs must be in "" double quotes.

 var jsonObject = { 
     "firstname" : "swapna",
     "lastname" : "ramuism"
     
 }
 
 console.log("JSON Object",jsonObject);

// Conclusion, every javascript object is JSON object, but every JSON Object not be Javascript object.


//JSON.stringify() function takes the java script object and converts to JSON and returns as String type
console.log("converting Javascript Object literals to JSON",typeof(JSON.stringify(javascriptObject)));

//JSON.parse() function takes the valid JSON in String form and converts to Java script Object and returns as Object type.
console.log("converting Javascript String  to JSON",typeof(JSON.parse('{ "firstname" : "swapna", "lastname" : "ramuism"}')));