const sumAll = function(a,b) {
    if (a < 0 || b < 0) return 'ERROR';
    //if (Number.isNaN(a) || Number.isNaN(b)) return 'ERROR';
    if (typeof(a) !== 'number' || typeof(b) !== 'number') return 'ERROR';

    let largest = a > b ? a : b;
    let smallest = a > b ? b : a;
    let sum = 0;

    for (let i = smallest; i <= largest ; i++) {sum += i;}
    return sum;
};
//error with negs- reminds me of factorials looping through and using that i value- the largest value can be first so maybe add a check for the largest number and use that as the conditional for iterVar 
// Do not edit below this line
module.exports = sumAll;
