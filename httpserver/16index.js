const e = require("express")
const { request } = require("express")

//  The https.createServer() method includes request and response parameters which is supplied 

//  the request object can be used to get information about the current HTTP request
//  e.g., url, request header , and data. 

//  the response object can be used to send a response for a current HTTP request . 

//  if the response from the HTTP  server is supposed to be displayed as HTML . 
//   YOU SHOULD INCLUDE  an HTTP hrader with the correct content type :
 
 
 // web server 
    // Nodejs provides capabilities to create our own server  which will handle HTTP requests asynchronously. 
    // we can use IIS or Apache to run NODE.JS  web application but it is reccomended to use Node.js web server.
const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Hello from the other side");
});

server.listen(8000, "127.0.0.1", () =>{
    console.log("listening to the port no 8000")
});