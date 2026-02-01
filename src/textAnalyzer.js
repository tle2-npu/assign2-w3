const fs = require('fs');

// Read file and return string content
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

// Count total number of words 
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length; 
}

// Find the longest word 
function findLongestWord(text) {
    const words = text.trim().split(/\s+/);
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Count number of lines 
function countLines(text) {
  const lines = text.split('\n');
  return lines.length;
}