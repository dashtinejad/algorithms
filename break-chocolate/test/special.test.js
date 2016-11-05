var chai = require('chai');
var expect = chai.expect;
var breakChocolate = require('../break-chocolate');

describe('Special Tests', function() {
    it('breakChocolate(0, 0) == 0', (function() {
        expect(breakChocolate(0, 0)).to.equal(0);
    }));

    it('breakChocolate(0, 1) == 0', (function() {
        expect(breakChocolate(0, 1)).to.equal(0);
    }));

    it('breakChocolate(1, 0) == 0', (function() {
        expect(breakChocolate(1, 0)).to.equal(0);
    }));

    it('breakChocolate(1, 1) == 0', (function() {
        expect(breakChocolate(1, 1)).to.equal(0);
    }));

    it('breakChocolate(-1, -1) == 0', (function() {
        expect(breakChocolate(-1, -1)).to.equal(0);
    }));
});