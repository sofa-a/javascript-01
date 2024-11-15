const reverseString = function(string) {
    const arr = string.split("");
    let backwards = "";
    for (let i=arr.length-1; i>-1; i--) {
        backwards += arr[i]
    }
    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
