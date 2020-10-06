
function logMessage(logMessaging) {
    console.log(logMessaging)
}

let myFunc = function loggingMessage() {
    console.log('here is my function message')
}

// Functions return values

function getSecretCode(value){
    let code = value + 5;
    return code;
}

// Function Scope
/*

let key = 42;
function getSecretCode(value){
 
    let keyGenerator = function(){
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
    
}
*/
