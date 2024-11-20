import { sum } from './index.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';

console.log(sum(1,2));

describe('Sum Function', () => {
    it('should add correctly', () => {
      // Arrange
      const operandA = 1;
      const operandB = 1;
  
      // Action
      const actualValue = sum(operandA, operandB);
  
      // Assert
      const expectedValue = 2;
      assert.equal(actualValue, expectedValue);
    });
  });