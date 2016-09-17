
// Example on function bind() method.
var math = {
     constant :2,
	 pi : 3.14
}

 function circleOperations(radius){

 	console.log("perimeter of Circle is "+(this.constant*this.pi*radius));
 	console.log("radius of circle is "+(this.pi*radius*radius));
 }

//Here we are binding circleOperations with math object.
var circle = circleOperations.bind(math);

circle(5);