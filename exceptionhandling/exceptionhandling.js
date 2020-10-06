// Exception Basics
try{
    // some code that could fail
}
catch (error){
    // Do something with the error
}
finally{
    // this code always true
}

function simpleTryCatch(){
    let result;

    try{
        result = x / 10;
    } catch (error){
        console.log(error.message);
    }
}

// Throw
 // can throw your own custom error
 // create an object with at least two properties: "message" and "name"

 function simpleTryCatchWithThrow(){
    let result;

    try{
        result = x / 10;
    } catch (error){
        throw{
            "message": "In method following error occured: " + error.message,
            "name" : "CustomError"
        }
    }
}

// Types of Errors
  // ReferenceError
  function referenceError(){
    let result;

    try{
        // Reference error because 'x' is not defined
        result = x / 10;
    } catch (error){
        console.log(error.message);
    }

  }

  // RangeError
  function rangeError(){
    let result = 0;

    try{
        // Range error because a number cannot have 200 significant digits
        result.toPrecision(200);
    } catch (error){
        console.log(error.message);
    }

  }
  // TypeError
  function typeError(){
    let result = 0;

    try{
        // Type error because result is a numeric
        result.toUpperCase();
    } catch (error){
        console.log(error.message);
    }

  }
  // URIError
  function uriError(){
    let uri = "http://....";

    try{
        // URI error 
        decodeURI(uri);
    } catch (error){
        console.log(error.message);
    }

  }
  // SyntaxError
  function syntaxError(){

    try{
        // Syntax error because missing a final single quote
        let sum = eval("Alert('Hello)")
    } catch (error){
        console.log(error.message);
    }

  }
  // EvalError