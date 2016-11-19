var chai = require('chai');
var expect = chai.expect;
var palindrome = require('../palindrome');

describe('Sample Tests', function() {
    it('palindrome(84) ==> 4', (function() {
        expect(palindrome(87)).to.equal(4);
    }));
});