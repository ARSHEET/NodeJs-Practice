const http = require('http')

// console.log(http);
// req = represents the incoming request by the client from the web browser AND "res" = response is what we're sending back
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Here's your front end page")
    }
    if(req.url === "/about"){
        res.end("You're in the about section")
    }
    res.end(
        `<h1>Error 402</h1>
        <p> We can't seem to find your requested page</p>
        <a href="/">Back home</a>`
    )
})

// what port is our server gonna be listening
server.listen(9000)