const reverseString = function(string) {
    //if (string == '') return string;
    stringArray = string.split('');
    stringArray.reverse();
    revString = stringArray.join('');
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
