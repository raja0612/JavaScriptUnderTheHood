
function makeGreet(language){

	return function(firstname,lastname){

		 if(language === 'en'){
		 	console.log("Hello "+firstname+" "+lastname);
		 }
		 if(language === 'es'){
		 	console.log("Hola "+firstname+" "+lastname);
		 }
	}
}


var englishGreet = makeGreet("en");
console.log(englishGreet);

var spanishGreet = makeGreet("es");
console.log(spanishGreet);

englishGreet("Rajashekhar","Ramayampeta");

spanishGreet("Ram","Gopal Varma");