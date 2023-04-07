// in nodejs all the file which has been created is called AS MODULE 
// and the variable in it is called as PRIVATE SCOPE

// MODULE WRAPPER - MODULE WRAPPER IS A WRAPPER , IT IS LIKE A GUARD TO PROTECT THE CODE WHICH IS PRESENT IN THE FILE 

// (function(exports, require , module, __filename, __dirname)
    
//     )

// this is the way by which nodejs wrapped the code 
(function(exports, require , module, __filename, __dirname)
   {const a = require("fs");
   const name = "vinod";
   console.log(name);
   module.exports = {dkfserfdssfs}
});

// IIFE IN JAVASCRIPT 
// IIFE IS LIKE A TOOL WHICH PROTECT THE CODE BY WRAPPING INTO A FUNCTION 
(function(){
    var a = "Giridhari jha";
    console.log(a);
})();// we have to call empty fn. 

    // console.log(a); // if we call this line here then nothing will be printed due to the feature of IFE


   