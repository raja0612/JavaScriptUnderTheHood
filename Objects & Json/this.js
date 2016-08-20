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
//In below code both console statements prints "Rajashekhar Goud Ramayampeta" even though we updated name property value;
var c = {
       name : "Rajashekhar Ramayampeta",
       log : function(){
           this.name = "Rajashekhar Goud Ramayampeta";
           
           console.log(this.name);
           
           var setname = function(newname){
               this.name = newname;
           }
           
           setname("Srujan Jack");
           console.log(this.name);
       }  
    
}
// so in order to resolve above conflict, we created self varible to point current this.
var d = {
       name : "Rajashekhar Ramayampeta",
       log : function(){
           self = this;
           self.name = "Rajashekhar Goud Ramayampeta";
           
           console.log(self.name);
           
           var setname = function(newname){
               self.name = newname;
           }
           
           setname("Srujan Jack");
           console.log(self.name);
       }  
    
}
a();
b();
c.log();
d.log();