const removeFromArray = function() {
    let array = arguments[0];
    if (arguments.length == 2) {
        return array.filter(element => element !== arguments[1]);
    }
    else if (arguments.length > 2) {
        let newArray = array;
        for (let i=1; i<arguments.length; i++) {
            newArray = newArray.filter(element => element !== arguments[i]);
        }
        return newArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
