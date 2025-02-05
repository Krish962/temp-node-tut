const {readFile, writeFile, writeFileSync} = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first =result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile( 
            './content/result-sync.txt',
            `Here is the result : ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with the task')
            }
            
        )

    })
    
})

console.log('starting the new task')

/*
1. Synchronous (fs.sync)

    -> Blocks the execution of code until the operation completes.
    -> Slows down the program if handling large files.
    -> Recommended for small scripts or startup operations.

2. Asynchronous (fs.async)

    -> Non-blocking, uses callbacks or Promises.
    -> Allows other code to execute while waiting.
    -> Preferred for large-scale applications.
*/
