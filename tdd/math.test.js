const assert = require('assert');
const isEven = require('./math');

describe('isEven', function() {
    it('should return true for even numbers', function() {
        assert.strictEqual(isEven(4), true);
    });

    it('should return false for odd numbers', function() {
        assert.strictEqual(isEven(5), false);
    });
});