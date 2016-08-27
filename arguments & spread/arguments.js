function functionParameters(firstname, lastname,role){
    
    // arguments is the default Javascript key word, it contains function parameters deatails in array like type.
    
    if(arguments.length === 0){
        console.log("Sorry, some parameters are missing");
        return;
    }else{
        console.log(firstname);
        console.log(lastname);
        console.log(role);
    }
}


functionParameters(); // 0 parameters are being passed.
console.log("---------------------");
functionParameters("Rajashekhar","Ramayampeta","Full Stack Java Developer");


function spreadParameters(firstname, lastname,role,...restOfParameters){
    /*
    ...restOfParameters - is the new java script keyword called spread. 
      It holds the rest of the parameters .i.e. if we pass more than specified parameters in respected function.
    */
    
    // arguments is the default Javascript key word, it contains function parameters deatails in array like type.
    
    console.log("----Spread key word values------",...restOfParameters);
    
}


spreadParameters("Rajashekhar","Ramayampeta","Full Stack Java Developer","Ram Gopal Varma","Swapna","Ramuism");