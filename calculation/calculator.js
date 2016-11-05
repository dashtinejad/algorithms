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
})('calculator', function() {
    let obj = {};

    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach((name, n) => {
        obj[name] = f => f ? f(n) : n;
    });

    obj.plus = (r) => (l) => l + r;
    obj.minus = (r) => (l) => l - r;
    obj.times = (r) => (l) => l * r;
    obj.dividedBy = (r) => (l) => l / r;

    return obj;
});