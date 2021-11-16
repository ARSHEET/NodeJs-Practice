const {readFile} = require('fs')
console.log('starting first task');
// CHECK FILE PATH
readFile('./contents/first.txt', 'utf8' , (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result); 
    console.log('Done with the first task');
} )
console.log('Starting the next task')