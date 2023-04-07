const fs  = require("fs");
const  http = require("http");

const server = http.createServer();
server.on("request", (req,res)=>{
    const rstream = fs.createReadStream("input.txt");
    // a new method to print read and write in only onle line is .pipe() method
    rstream.pipe(res); // readable stream m pipe method laga k jo v response aayega usko print krwa dena hai

});

server.listen(8000,"127.0.0.1");