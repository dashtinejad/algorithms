var chai = require('chai');
var expect = chai.expect;
var narcissistic = require('../narcissistic');

describe('Sample Tests', function() {
    let narcissisticValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474 ];

    for (let i = 0; i < 9999; i++) {
        let resultValue = narcissisticValues.indexOf(i) > -1;

        it(`narcissistic(${i}) ==> ${resultValue}`, (function() {
            expect(narcissistic(i)).to.equal(resultValue);
        }));
    }
});