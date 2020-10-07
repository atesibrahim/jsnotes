'use strict'; 
(function() {

// Math, Date, Regex

/* Math */

    display(Math.PI);
    display(Math.max(2,45,3));

/* Date */
    let date = new Date();
    display(date.toString());

    let date1 = new Date(2050,3,25,13,1,30,50);
    display(date1.toString());

    let date2 = new Date(2050,3,25,13,1,30,55);

    display(date2-date1); // find milliseconds between two dates


/* Regex */

function checkPasswordComplexity(password){
    let regex = new RegExp('^()');

    let regex2 = /^()/;  // regex and regex2 has same result. regex2 define between //

    return regex.test(password); // If match with regex return true, else return false
}

function findAlerts(logData) {
    let regex = /ERROR(.*?):(.*?);/g;

    let result = regex.exec(logData);
    while(result !== null){
        display(result[1]);
        display(result[2]);
        display('------------------');
        result = regex.exec(logData);
    }
    
}

let logData = 'INFO:Ok;ERROR(HIGH):Sth broked;ERROR(LOW):Hiiii;'
findAlerts(logData);

})();