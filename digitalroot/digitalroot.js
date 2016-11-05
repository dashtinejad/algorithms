// UMD Definitions
(function(name, definition) {
    // NodeJS & CommonJS
    if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        module.exports = definition();
    }
    // AMD
    else if (typeof define === 'function' && typeof define.amd === 'object') {
        define(definition);
    }
    // Browser Globals
    else {
        this[name] = definition();
    }
})('digitalroot', function() {
    /*
    return function f(n) {
        let sum = n
            .toString().split('')
            .reduce((sum, digit) => sum + +digit, 0);

        if (sum > 9) {
            return f(sum);
        }

        return sum;
    };
    */

    /*
    return function(num) {
        while (num >= 10) {
            num = parseInt(num / 10, 10) + num % 10;
        }

        return num;
    }
    */

    return function(num) {
        let dividedByNine = num % 9;

        return dividedByNine ? dividedByNine : 9;
    }
});