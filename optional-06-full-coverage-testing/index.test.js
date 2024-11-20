import sum from './index.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';

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

    it('expected to be zero when sum with negative value on parameter a',()=>{
      // Arrange
      const operandA = -1;
      const operandB = 1;
  
      // Action
      const actualValue = sum(operandA, operandB);
  
      // Assert
      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);  
    });

    it('expected to be zero when sum with negative value on parameter b',()=>{
      // Arrange
      const operandA = 1;
      const operandB = -1;
  
      // Action
      const actualValue = sum(operandA, operandB);
  
      // Assert
      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);  
    });
  
    it('expected to be zero when sum with negative value on both parameters',()=>{
      // Arrange
      const operandA = -1;
      const operandB = -1;
  
      // Action
      const actualValue = sum(operandA, operandB);
  
      // Assert
      const expectedValue = 0;
      assert.equal(actualValue, expectedValue);  
    });

    it('expected to be zero when sum with non-number value on parameter a',()=>{
        // Arrange
        const operandA = "1";
        const operandB = 1;
    
        // Action
        const actualValue = sum(operandA, operandB);
    
        // Assert
        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);  
      });

    it('expected to be zero when sum with non-number value on parameter b',()=>{
        // Arrange
        const operandA = 1;
        const operandB = "1";
    
        // Action
        const actualValue = sum(operandA, operandB);
    
        // Assert
        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);  
      });
  
    it('expected to be zero when sum with non-number value on both parameters',()=>{
        // Arrange
        const operandA = 1;
        const operandB = "1";
    
        // Action
        const actualValue = sum(operandA, operandB);
    
        // Assert
        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);  
      });
  
  });