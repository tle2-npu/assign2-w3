const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

// countWords
describe('Count Words Tests', () => {
    test('should count words in normal text', () => {
        const result = countWords('Hello world test');
        expect(result).toBe(3);
    });

    test('should handle single word', () => {
        const result = countWords('Hello');
        expect(result).toBe(1);
    });

    test('should handle empty text', () => {
        const result = countWords('');
        expect(result).toBe(0);
    }); 

    test('should handle extra spaces', () => {
        const result = countWords('   Hello    world   ');
        expect(result).toBe(2);
    }); 
});

// findLongestWord
describe('Find Longest Word Tests', () => {
    test('should find the longest word', () => {
        const result = findLongestWord('I love programming');
        expect(result).toBe('programming');
    });
    
    test('should work with one word', () => {
        const result = findLongestWord('Hello');
        expect(result).toBe('Hello');
    });

    test('should return empty string for empty input', () => {
        const result = findLongestWord('');
        expect(result).toBe('');
    });
});

// countLines 
describe('Count Lines Tests', () => {
    test('should count multiple lines', () => {
        const text = 'Line one\nLine two\nLine three';
        const result = countLines(text);
        expect(result).toBe(3);
    });

    test('should count single line', () => {
        const result = countLines('Only one line');
        expect(result).toBe(1);
    });

    test('should handle empty text', () => {
        const result = countLines('');
        expect(result).toBe(1);
    });
});