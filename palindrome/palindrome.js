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
})('palindrome', function() {
    return function f(n, count) {
        count = count || 0;
        n = n.toString();
        let r = n.split('').reverse().join('');

        r = +r;
        n = +n;
        
        if (n === r) return count;

        return f(n + r, ++count);
    };
});