const http = require('http') //we use require to specify a path and import files/module to js file
const fs = require('fs') // for importing file system core module
const { buffer } = require('stream/consumers')

// define the function once use createServer()

/*
function rqListener(request, response) {

}
*/

//Alternativly we can create an anymous functions
/*

http.createServer((req, res) => {
    console.log(req)
}) //The createserver takes two arguments one for request listener other for response

*/


const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(3000)

// The above code is stuck inside the event loop means it will run contionously however once we use process.exit() it will break from the loop


// we can also return the specific url and method by using these functions

const server2 = http.createServer((req, res)=>{
    const url = req.url
    const method = req.method
    if (url === '/') {

        res.write('<html>')
        res.write('<head><title>Node js</title></head>')
        res.write('<body><form method="POST" action="/message" ><input type="text" name="message><button type="submit">Submit</button></input></form><body>')
        res.write('</html>')
        return res.end() // the return res.end() prevents the other block of code intefering or causing error
    }
    if (url==='/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            /*The sync file write function is very good for handling small chunk of data
            however for large chunck of data it is better to use writeFile() due to async nature of node js
            */
            fs.writeFile('message.txt', message, err=>{
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end()
            }) // a messagetxt file will be created and a dummy text will be inserted
        })

    }
    res.setHeader('Content-Type', 'text/html') // specifying the web document type
    res.write('<html>')
    res.write('<head><title>Node js</title></head>')
    res.write('<body><h1>Hi from Node js server <h1/><body>')
    res.write('</html>')
    res.end() // specifying the end the above code will not work if this isn't specified

})

server2.listen(4000)
// req.url returns specific url req.header return the top header info req.method returns which method is used,
// like post get etc.

