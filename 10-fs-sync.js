const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

// If there is on override content in file, if there is flag it will continue to write in file. If there is not create the file
writeFileSync('./content/reslut-sync.txt', 'This is the created text file', {
    flag: 'a',
});
