// switch statement

function simpleSwitch() {
let productId = 2;

switch(productId){
    case 1:
        console.log("Product 1");
        break;
    case 2:
        console.log("Product 2");
        break;
    default:
        console.log("unknown product");
        break;
}
}


// multiple case statements > If more than one case then use as following

function multipleSwitch() {

    let color = 'Red';

    switch(color){
        case "Red":
        case "Pink":
            console.log("The color is red");
            break;
        case "Blue":
        case "Light Blue":
        case "Dark Blue":
            console.log("The color is blue");
            break;
    }
    
}

//! Dont forget break : when you forget break, then the case which is match with statement will executed and the next statement will execute also all time.

// Use switch statement for readability

// Switch statement is more efficient than multiple if...else statements




// For/in statement  
   // Iterates over elements of object (properties and methods)
   // Returns key (property / method) name
   // object[key] returns value

function forinSample() {
    let prod = {
        "name":"prod",
        "number":"123",
        "standardCost":365.36,
        calculateGrossProfit : function() {
            return this.standardCost = this.standardCost;
            
        }
    };

    for (const key in prod) {
        console.log("'" + key + "'=" + prod[key])
        
    }
    
}

// For/of statement  
   // Iterates over values in array, string etc.
   // Returns object for each iteration

function forofSample() {
    let prods = [{
        "name":"prod",
        "number":"123",
        "standardCost":365.36
            
        },
        {
            "name":"prod",
            "number":"123",
            "standardCost":365.36
                
            },
            {
                "name":"prod",
                "number":"123",
                "standardCost":365.36
                    
                }
        
        ]

    for (const item of prods) {
        console.log(JSON.stringify(item))
        
    }
    
}
