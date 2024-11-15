const sumAll = function() {
    let small = arguments[0];
    let large = arguments[1];
    let sum = 0;

    if (typeof small !== 'number' || typeof large !== 'number' ||
        small < 0 || large < 0 || small % 1 !== 0 || large % 1 !== 0) {
        return "ERROR";
    }

    if (arguments[0] > arguments[1]) {
        small = arguments[1];
        large = arguments[0];
    }

    for (let i=small; i<large+1; i++) {
        sum += i;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
