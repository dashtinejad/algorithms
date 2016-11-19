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
})('pascalTriangle', function() {
    // take a row and return the summed one
    // n = 4 : [1, 3, 3, 1]
    // return : [1, 4, 6, 4, 1]
    let _summed = function(oldArr) {
        let arr = [];

        arr.push(1);

        for (let i = 0; i < oldArr.length - 1; i++) {
            arr.push(oldArr[i] + oldArr[i + 1]);
        }

        arr.push(1);

        return arr;
    };

    let _cached = [];
    _cached[1] = [1];

    return function(n) {
        for (let i = 1; i <= n; i++)
            if (typeof _cached[i] === 'undefined')
                _cached[i] = _summed(_cached[i - 1]);

        return _cached[n];
    };

});