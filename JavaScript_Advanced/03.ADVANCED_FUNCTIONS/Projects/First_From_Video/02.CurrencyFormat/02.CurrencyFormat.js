const currencyFormatter = require('./formatter');

function getDollarFormatter(formatter){
    return function (value) {
        return formatter('.', '$', true, value);
    };
}


function getEuroFormater(formatter){
    return function (value) {
        return formatter(',', 'E', true, value);
    };
}

const dollarFormatter = getDollarFormatter(currencyFormatter);
const euroFormatter = getEuroFormater(currencyFormatter);


console.log(dollarFormatter(100));
console.log(dollarFormatter(5));
console.log(dollarFormatter(5000));
console.log(euroFormatter(120));
console.log(euroFormatter(3.14));
