const http = require("http");

// making our own server
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("Hello from home side");//if we have to open home page
    }else if (req.url == "/about"){
       res.end("Hello from the AboutUs sides");
    }else if(req.url == "/contact"){
        res.end("hello from contactUs side"); //res.end is used to print output
    }else {
        res.writeHead(404);
        res.end("404 error pages. page doesn't exist");
    }
});
// we have to pass port like 8000 and run on browser (localhost:8000) to get result
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no 8000");
});