var chai = require('chai');
var expect = chai.expect;
var factorial = require('../factorial');

describe('Sample Tests', function() {
    let values = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];

    values.forEach((n, i) => {
        it(`factorial(${i}) ==> ${n}`, (function() {
            expect(factorial(i)).to.equal(n);
        }));
    });
});