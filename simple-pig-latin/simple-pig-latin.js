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
})('simplePigLatin', function() {
    return function (str) {
        const strArr = str.split(' ');

        let pigArr = [];

        strArr.forEach(word => {
            let newWord = word.substring(1) + word.substring(0, 1);
            pigArr.push(newWord + 'ay');
        });

        return pigArr.join(' ');
    }
});