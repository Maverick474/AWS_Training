const file = require('fs')
const os = require('os')

console.log(os.cpus().length)

// Blockihg request

console.log(1+2)
const read = file.readFileSync('contact.txt', 'utf-8')
console.log(read)
console.log("Hi")
console.log(4)

//Non blocking request
console.log(1)
const read1 = file.readFile("contact.txt", "utf-8", (err, result) =>{
    if(err){
        throw new err(err)

    } else{
        console.log(result)
    }
})

console.log(2)