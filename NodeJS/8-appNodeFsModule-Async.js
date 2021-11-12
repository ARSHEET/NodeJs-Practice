const {readFile, writeFile} = require('fs')
console.log('start');
// readFile('./contents/first.txt', 'utf8' , (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result);
// })

readFile('./contents/first.txt', 'utf8' , (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
readFile('./contents/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result;
writeFile('./contents/createdByWriteFileMethodAsync.txt', `Here's the result of writeFile: ${first}, ${second}`, (err, result)=> {
    if(err){
        console.log(err);
        return;
    }
    console.log('Done with the Async task');
} )
})
})
console.log('Starting the next task')