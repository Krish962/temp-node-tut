// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');
const customEmitter = new EventEmitter()

// on -> listen for an event
// emnit -> emit an event

customEmitter.on('response',(name, id)=>{
    console.log(`data recieved from user ${name} with id ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`some other`)
})

customEmitter.emit('response', 'john', 34)

//order matters, we first listen for event then only emit
//we can also pass some other arguments in the emit
