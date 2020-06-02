const { expect } = require('chai');
const { sum, substract} = require('../calculator');

it('expect sum(1,2) to be queal to 3', () => {
    const expected = 3;

    const actual = sum(1,2);

    expect(actual).to.be.eq(expected);
});