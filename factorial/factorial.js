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
})('factorial', function() {
    let _cached = [];
    return function f(n) {
        if (typeof _cached[n] !== 'undefined')
            return _cached[n];

        if (n == 0)
            return 1;

        let r = n * f(n - 1);
        _cached[n] = r;

        return r;
    };
});