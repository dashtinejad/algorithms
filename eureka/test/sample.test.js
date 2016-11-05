var chai = require('chai');
var expect = chai.expect;
var eureka = require('../eureka');

describe('Sample Tests', function() {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135];

    for (let i = 1; i < 150; i++) {
        it(`eureka(${i}) ==> true`, (function() {
            expect(eureka(i)).to.equal(values.indexOf(i) > -1);
        }));
    }
});