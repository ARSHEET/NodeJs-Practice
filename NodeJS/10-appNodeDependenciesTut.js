const lodash = require('lodash')

const itemArray = [1,[2,[3,[4]]]]
const newItemArray = lodash.flattenDeep(itemArray)
console.log(newItemArray);