'use strict';

var expect = require('chai').expect;
var randomInRange = require('../app');

describe('#randomInRange', function() {
    it('should randomly generate a number in a range', function() {
        const result = randomInRange(1, 10);
        expect(result).to.be.at.least(1);
        expect(result).to.be.at.most(10);
    });
});