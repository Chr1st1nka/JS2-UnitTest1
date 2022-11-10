// const assert = require('assert');
const expect = require('chai').expect;
const {sum, allUpper} = require('../index');

describe('SUM', () => {
    it('calc sum with positive numbers', () => {
        // assert.equal(sum(2, 3), 5)
        expect(sum(2, 4)).equal(6)
    })

    it('calc sum with negative numbers', () => {
        // assert.equal(sum(-3, -2), -5)
        expect(sum(-2, -4)).equal(-6)
    });
});

describe('ALL UPPER', () => {
    it('input all lower cases', () => {
        expect(allUpper(['a', 'bc'])).eql(['A', 'BC']);
    })

    it('input all upper cases', () => {
        expect(allUpper(['A', 'BC'])).eql(['A', 'BC']);
    });
});

