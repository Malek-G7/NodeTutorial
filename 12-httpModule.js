const http = require("http")

const server = http.createServer((request,response) => {
    if(request.url === "/"){
        response.end("welcome to our homepage")
    }
    if(request.url === "/about"){
        response.end("welcome to our about page")
    }
    else{
        response.end(`<h1>oops!</h1> 
        <p>cant seem to find the page you ae looking for</p>
        <a href = "/"> back to home page </a> 
        `)
    }

})

server.listen(5000)