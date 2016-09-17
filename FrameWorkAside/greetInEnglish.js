

(function greetInEnglish(global,name){
    var greet = "Hello"
	console.log(window.greet +" "+ name)
}(window,"Rajashekhar"));




//Function with in function 


function greetLanguage(whattosay){

	return function(name){

		console.log(whattosay + " "+name);

	}
}

greetLanguage("Hello")("Ram Gopal Varma");


//closure example


function greetLanguage(whattosay){

	return function(name){

		console.log(whattosay + " "+name);

	}
}

var greetFunc = greetLanguage("Hola") // calling greetLanguage and assigning return function to greetFunc variable.

greetFunc("Closure");