var chai = require('chai');
var expect = chai.expect;
var breakChocolate = require('../break-chocolate');

describe('Sample Tests', function() {
    it('breakChocolate(5, 5) == 24', (function() {
        expect(breakChocolate(5, 5)).to.equal(24);
    }));

    it('breakChocolate(3, 2) == 5', function() {
        expect(breakChocolate(3, 2)).to.equal(5);
    });
});