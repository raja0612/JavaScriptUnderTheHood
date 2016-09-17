function grettLater(){

	var greet = "Hi...Rajashekhar";


	//javascript built in function setTimeout()

	 setTimeout(function(){

       console.log(greet);

	 },3000);
}


grettLater();



function tellMeWhenDone(callback){

	var a = 1000;

	var b = 2000;
	console.log("addition is ...",(a+b));

	callback();
}


tellMeWhenDone(function(){
	console.log("Hi Raja");
});

//here we are calling tellMeWhenDone() function, after execution of this function , it calls back function expression.

// In this case function expression with console.log("Hi Raja..."); statement will be executed.