// keyword 'this'

//here this keyword points to global context area. i.e all varibales  are being commonly shared in this js file
function a(){
    console.log(this);
    this.name = "Rajashekhar Ramayampeta";
    console.log(this.name);
}
//here this keyword points to global context area. i.e all varibales  are being commonly shared in this js file
var b = function(){
    console.log(this);
    console.log(this.name);
}
//here this keyword points to varible c  context location. so c has it's own context area.
//In below code both console statements prints "Rajashekhar Goud Ramayampeta";
var c = {
       name:"Rajashekhar Goud Ramayampeta",
       log:function(){
           console.log(this.name);
           var setname = function(newname){
               this.name = newname;
               console.log(this.name);
               setname("Srujan Jack");
           }
       }  
    
}
a();
b();
c.log();