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
})('narcissistic', function() {
    return function(n) {
        const digitCount = n.toString().length;
        const originalNum = n;

        let sum = 0;
        while (n > 10) {
            sum += Math.pow(n % 10, digitCount);
            n = parseInt(n / 10, 10);
        }

        sum += Math.pow(n, digitCount);

        return sum === originalNum;
    };
});