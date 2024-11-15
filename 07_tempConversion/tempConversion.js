const convertToCelsius = function(temp) {
    return round(((temp-32)*5)/9, 1);
};

const convertToFahrenheit = function(temp) {
    return round(((temp*(9/5))+32), 1);
};

function round(number, places) {
    const factor = Math.pow(10, places);
    return Math.round(number * factor) / factor;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
