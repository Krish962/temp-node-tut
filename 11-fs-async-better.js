const {readFile,writeFile} = require('fs').promises
//const util = require('util')
//
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)


//async is used to make the function asynchronious
const start = async () => {

    //try block contains code that may cause an error.
    //If an error occurs, execution jumps to the catch block.
    try{
        //const first = await readFilePromise('./content/first.txt', 'utf8')
        //const second = await readFilePromise('./content/second.txt', 'utf8')
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            {flag: 'a'}
        )
        console.log(first)
        console.log(second)
    }
    catch(error){
        console.log(err);
    }
}
start()


//const getText = (path) => {
//    return new Promise((resolve, reject)=>{
//        readFile(path, 'utf8', (err,data) => {
//            if(err){
//                reject(err)
//            }
//            else{
//                resolve(data)
//            }
//        })
//    })
//}

//getText('./content/first.txt')
//.then((result)=>console.log(result))
//.catch((err)=>console.log(err))
