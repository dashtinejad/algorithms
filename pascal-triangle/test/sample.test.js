var chai = require('chai');
var expect = chai.expect;
var pascalTriangle = require('../pascal-triangle');

describe('Sample Tests', function() {
    let arr = [];
    arr[1] = [1];
    arr[2] = [1, 1];
    arr[3] = [1, 2, 1];
    arr[4] = [1, 3, 3, 1];
    arr[5] = [1, 4, 6, 4, 1];
    arr[6] = [1, 5, 10, 10, 5, 1];
    arr[7] = [1, 6, 15, 20, 15, 6, 1];
    arr[8] = [1, 7, 21, 35, 35, 21, 7, 1];
    arr[9] = [1, 8, 28, 56, 70, 56, 28, 8, 1];

    for (let i = 0; i < 10; i++) {
        it(`pascalTriangle(${i}) ==> ${arr[i]}`, (function() {
            expect(pascalTriangle(i)).to.deep.equal(arr[i]);
        }));
    }
});