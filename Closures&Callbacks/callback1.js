function firstFunction(callSecondFunction){

   console.log("firstFunction is called");

   callSecondFunction();

}

firstFunction(function(){
  callThirdFunction();
});

function callThirdFunction(){

	console.log("this function is called after firstFunction execution")
}