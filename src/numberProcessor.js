const fs = require('fs');

// Read numbers from file and return array of numbers
function readNumbersFromFile(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split('\n');
    const numbers = [];
    
    for (let line of lines) {
        const trimmed = line.trim();
        if (trimmed.length > 0) {
            numbers.push(parseFloat(trimmed));
        }
    }
    return numbers;
}

// Calculate sum of numbers
function calculateSum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// Find highest & lowest numbers
function findMinMax(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let num of numbers) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return { min, max };
}

// Calculate average
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Test functions 
const numbers = readNumbersFromFile('./data/sample-numbers.txt');

console.log('Numbers:', numbers);
console.log('Sum:', calculateSum(numbers));

const { min, max } = findMinMax(numbers);
console.log('Lowest:', min);
console.log('Highest:', max);

console.log('Average:', calculateAverage(numbers));

// Export functions 
module.exports = {
    calculateSum,
    findMinMax,
    calculateAverage
};