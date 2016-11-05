var chai = require('chai');
var expect = chai.expect;
var calculator = require('../calculator');

global.zero = calculator.zero;
global.one = calculator.one;
global.two = calculator.two;
global.three = calculator.three;
global.four = calculator.four;
global.five = calculator.five;
global.six = calculator.six;
global.seven = calculator.seven;
global.eight = calculator.eight;
global.nine = calculator.nine;
global.plus = calculator.plus;
global.minus = calculator.minus;
global.times = calculator.times;
global.dividedBy = calculator.dividedBy;

describe('Sample Tests', function() {
    it('2 * 5 = 10', (function() {
        expect(two(times(five()))).to.equal(10);
    }));

    it('2 + 5 = 7', (function() {
        expect(two(plus(five()))).to.equal(7);
    }));

    it('2 - 5 = -3', (function() {
        expect(two(minus(five()))).to.equal(-3);
    }));

    it('6 / 3 = 2', (function() {
        expect(six(dividedBy(three()))).to.equal(2);
    }));
});

describe('All Tests', function() {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let plusResult = i + j;
            it(`${i} + ${j} = ${plusResult}`, (function() {
                expect(global[numbers[i]](plus(global[numbers[j]]()))).to.equal(plusResult);
            }));

            let timesResult = i * j;
            it(`${i} * ${j} = ${timesResult}`, (function() {
                expect(global[numbers[i]](times(global[numbers[j]]()))).to.equal(timesResult);
            }));

            let minusResult = i - j;
            it(`${i} - ${j} = ${minusResult}`, (function() {
                expect(global[numbers[i]](minus(global[numbers[j]]()))).to.equal(minusResult);
            }));

            if (j !== 0) {
                let dividedByResult = i / j;
                it(`${i} / ${j} = ${dividedByResult}`, (function() {
                    expect(global[numbers[i]](dividedBy(global[numbers[j]]()))).to.equal(dividedByResult);
                }));
            }
        }
    }
});