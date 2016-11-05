var chai = require('chai');
var expect = chai.expect;
var breakChocolate = require('../break-chocolate');

describe('Random Tests', function() {
    // http://stackoverflow.com/a/1527820/3971911
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 100; i++) {
        let n = getRandomInt(1, 100);
        let m = getRandomInt(1, 100);
        let r = n * m - 1;

        it(`breakChocolate(${n}, ${m}) == ${r}`, function() {
            expect(breakChocolate(n, m)).to.equal(r);
        });
    }
});