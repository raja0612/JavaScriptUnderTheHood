function greet(name, language){
	
	 if(language === 'en'){

	 	console.log("Hello..."+name);
	 }

	 if(language === 'es'){

	 	console.log("Hola....."+name);
	 }
}


function englishGreeting(){
	greet("Rajashekhar","en");
}

function spanishGreeting(){
	greet("Rajashekhar","es");
}

englishGreeting();
spanishGreeting();