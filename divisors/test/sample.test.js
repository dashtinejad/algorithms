var chai = require('chai');
var expect = chai.expect;
var divisors = require('../divisors');

describe('Sample Tests', function() {
    it('divisors(15) ==> [3, 5]', (function() {
        expect(divisors(15)).to.deep.equal([3, 5]);
    }));

    it('divisors(12) ==> [2, 3, 4, 6]', (function() {
        expect(divisors(12)).to.deep.equal([2, 3, 4, 6]);
    }));

    it('divisors(13) ==> []', (function() {
        expect(divisors(13)).to.deep.equal([]);
    }));

    it('divisors(17) ==> []', (function() {
        expect(divisors(17)).to.deep.equal([]);
    }));

    it('divisors(16) ==> [2, 4, 8]', (function() {
        expect(divisors(16)).to.deep.equal([2, 4, 8]);
    }));
});