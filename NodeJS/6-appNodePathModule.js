const path = require('path')

console.log(path.sep)

const filePath = path.join('/contents','untitledNotes.txt')
// console.log(filePath);

const base = path.basename(filePath)
// console.log(base);

const absolutePath = path.resolve(__dirname, 'contents', 'untitledNotes.txt')
console.log(absolutePath);