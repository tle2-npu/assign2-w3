const { calculateSum, findMinMax, calculateAverage } = require('../src/numberProcessor');

// calculateSum 
describe('Calculate Sum Tests', () => {
    test('should calculate sum of positive numbers', () => {
        const result = calculateSum([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
    });

    test('should calculate sum with negative numbers', () => {
        const result = calculateSum([-1, -2, -3]);
        expect(result).toBe(-6);
    });

    test('should return 0 for empty array', () => {
        const result = calculateSum([]);
        expect(result).toBe(0);
    });

    test('should handle array with one number', () => {
        const result = calculateSum([42]);
        expect(result).toBe(42);
    });
});

// findMinMax
describe('Find Min and Max Tests', () => {
    test('should find min and max in positive numbers', () => {
        const { min, max } = findMinMax([1, 5, 3, 9, 2]);
        expect(min).toBe(1);
        expect(max).toBe(9);
    });

    test('should work with negative numbers', () => {
        const { min, max } = findMinMax([-5, -1, -9, -3]);
        expect(min).toBe(-9);
        expect(max).toBe(-1);
    });

    test('should work with single element', () => {
        const { min, max } = findMinMax([42]);
        expect(min).toBe(42);
        expect(max).toBe(42);
    });
});

// calculateAverage
describe('Calculate Average Tests', () => {
    test('should calculate average of positive numbers', () => {
        const result = calculateAverage([2, 4, 6, 8]);
        expect(result).toBe(5);
    });

    test('should calculate average with negative numbers', () => {
        const result = calculateAverage([-2, -4, -6]);
        expect(result).toBe(-4);
    });

    test('should handle array with one number', () => {
        const result = calculateAverage([10]);
        expect(result).toBe(10);
    });
});