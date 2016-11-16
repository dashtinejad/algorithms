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
})('fibonacci', function() {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    return function(n) {
        if (typeof fib[n] !== 'undefined') {
            return fib[n];
        }
        
        for (let i = fib.length; i <= n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }

        return fib[n];
    };
});