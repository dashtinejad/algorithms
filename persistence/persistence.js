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
})('persistence', function() {
    return function (num) {
        let count = 0;

        while (num > 9) {
            count++;

            let digits = num.toString().split('');

            let times = 1;
            for (let i = 0, l = digits.length; i < l; i++) {
                times *= digits[i];
            }

            num = times;
        }

        return count;
    }
});