// Streams are object that let you read data from a source or write data to a 
// destination in continous fashion. In NOde.js , there are four types of streams-

// Streaming means listening to music online or watching video in 'real time' , instead of 
// downloading a file to your computer . 

// Readable - Stream which is used for read operation . 
// Writable -  Stream which is used for write operation. 
// Duplex - Stream which can be used for both read and write operation . 
// Transform - A type of duplex stream where the output is computed based on input.

// Each type of stream is an EventEmitter instance and throws several  events at different instance of times . for Example, 
// data - the event is fired when there is data is available to read. 
// end - this event  is fired when all the data has been flushed to underlying system 

const fs  = require("fs");
const  http = require("http");

const server = http.createServer();
server.on("request", (req,res)=>{
    // fs.readFile("input.txt", (err,data) =>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
    
    // 2nd Way 
    // Create a readable stream 
    // Reading from a Stream 
    const rstream = fs.createReadStream("input.txt");
    // Handle Stream events -----> data, end , and error 
    rstream.on("data", (chunkdata) =>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    })
    rstream.on("error", (err) =>{
        console.log(err);
        res.end("file not found");
    });

});

server.listen(8000,"127.0.0.1");