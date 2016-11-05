var chai = require('chai');
var expect = chai.expect;
var digitalroot = require('../digitalroot');

describe('Sample Tests', function() {
    it('digitalroot(16) == 7', (function() {
        expect(digitalroot(16)).to.equal(7);
    }));

    it('digitalroot(942) == 6', (function() {
        expect(digitalroot(942)).to.equal(6);
    }));

    it('digitalroot(132189) == 6', (function() {
        expect(digitalroot(132189)).to.equal(6);
    }));

    it('digitalroot(493193) == 2', (function() {
        expect(digitalroot(493193)).to.equal(2);
    }));
});