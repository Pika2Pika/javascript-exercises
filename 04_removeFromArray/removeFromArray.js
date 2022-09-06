const removeFromArray = function(givenArray, ...delValues) {
    delValues = Array.from(delValues);
    //iterate through del values grab index of in given array splice given array and remove one item 
    for(let i = 0; i < delValues.length; i++){
        let index = givenArray.indexOf(delValues[i]); 
        if (index >= 0)  givenArray.splice(index,1);
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
