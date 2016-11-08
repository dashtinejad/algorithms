var chai = require('chai');
var expect = chai.expect;
var persistence = require('../persistence');

describe('Sample Tests', function() {
    it('persistence(39)', (function() {
        expect(persistence(39)).to.equal(3);
    }));

    it('persistence(4)', (function() {
        expect(persistence(4)).to.equal(0);
    }));

    it('persistence(25)', (function() {
        expect(persistence(25)).to.equal(2);
    }));

    it('persistence(999)', (function() {
        expect(persistence(999)).to.equal(4);
    }));
});