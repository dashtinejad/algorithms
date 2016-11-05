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
})('eureka', function() {
    return function(n) {
        let sum = n
            .toString() // make it string
            .split('') // make array by each digit
            .reduce((sum, digit, index) => sum + digit ** (index + 1), 0);

        return sum == n;
    };
});