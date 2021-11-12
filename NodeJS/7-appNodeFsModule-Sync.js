// const fs = require('fs') ; this line is same as below line , we just destructured in 2nd line
// fs.readFileSync (just like os and path module we do it in fs(filesync as well))
const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./contents/first.txt', 'utf8')
const second = readFileSync('./contents/second.txt', 'utf8')

// console.log(first, second);

// flag is method to append a file meaning upload and as a result it overwrite the previous line of value from writeFileSync and we saw two lines of same value in the resultant file
writeFileSync('./contents/createdByWriteFileSyncMethod.txt', `This file is created by writeFileSync method by fs module: ${first}, ${second}`, { flag: 'a'})

console.log('Done with sync task');
console.log('starting the next one');