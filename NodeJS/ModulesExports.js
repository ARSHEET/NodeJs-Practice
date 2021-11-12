// console.log(__dirname)

// console.log(__filename)

// console.log(require)

// console.log(module)

// console.log(process)

// console.log(process.platform)


// console.log(__dirname)

// prints the line every second and to exit press ctrl + c
// setInterval(() => {
//     console.log('New line of code with nodeJS')
// }, 1000);

// prints console statement line after 1 second (only 1 line) 
// settimeout(() => {
//     console.log('New line of code with nodeJS')
// }, 1000);

const RandomVariables = require('./3-appNodeVariables')
const RandomArray = require('./2-appNode')
require('./4-appNodeFunctionRequire')

// console.log(RandomVariables);
RandomArray(RandomVariables.age, RandomVariables.hobbies, RandomVariables.introV)



