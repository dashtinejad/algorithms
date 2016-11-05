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
})('divisors', function() {
    return function(n) {
        let output = [];

        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                output.push(i);
            }
        }

        return output;
    };
});