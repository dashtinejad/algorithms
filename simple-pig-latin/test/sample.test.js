var chai = require('chai');
var expect = chai.expect;
var simplePigLatin = require('../simple-pig-latin');

describe('Sample Tests', function() {
    it("simplePigLatin('Pig latin is cool') === 'igPay atinlay siay oolcay'", (function() {
        expect(simplePigLatin('Pig latin is cool')).to.equal('igPay atinlay siay oolcay');
    }));

    it("simplePigLatin('This is my string') === 'hisTay siay ymay tringsay'", (function() {
        expect(simplePigLatin('This is my string')).to.equal('hisTay siay ymay tringsay');
    }));
});