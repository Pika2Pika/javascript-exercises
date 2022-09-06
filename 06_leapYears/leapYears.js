const leapYears = function(year) {
   // if (year % 400 === 0) return true; //year % 100 === 0 && possibly not needed 
    //else if (year % 100 === 0) return false; //error 1900/4 == 475 ditto 700 error in branching 
    //else if (year % 4 === 0) return true;
    //else return false;  
    let leapBool = (year % 400 === 0) ? true 
    : (year % 100 === 0) ? false : (year % 4 === 0) ? true : false;
    return leapBool;
};
//divisible by 4  years ending in 00 not divisible by 100 but divisible by 400
//numbers ending in 00 can be divisble by 4 but not by 400 so should check first
// Do not edit below this line
module.exports = leapYears;
