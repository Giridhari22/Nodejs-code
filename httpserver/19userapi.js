// API- it allows software to comunicate with each other
// we will run api which is already created in 19userApi.json
const fs = require("fs");
const http = require("http");

  

// making our own server
const server = http.createServer((req, res)=>{

          // we have to pass the full path under the file system
    const data = fs.readFileSync(`${__dirname}/userApi/19userapi.json` ,"utf-8");
            
            // to get the data from the 19userapi.json
             //  res.end(data);
            // if we have to get data into object format
    const objData = JSON.parse(data);

    if(req.url == "/"){
        res.end("Hello from home side");//if we have to open home page
    }else if (req.url == "/about"){
       res.end("Hello from the AboutUs sides");
    }else if(req.url == "/contact"){
        res.end("hello from contactUs side"); //res.end is used to print output
    }else if(req.url =="/userapi"){ //to print the api stored in 19userapi.json
        // we should tell the browser , from which data we use
        res.writeHead(200 , {"content-type":"application/json"}); // 200 for success 
        res.end(objData[1].name);

    }else {
        res.writeHead(404);
        res.end("404 error pages. page doesn't exist");
    }
});
// we have to pass port like 8000 and run on browser (localhost:8000) to get result
server.listen(4000, "127.0.0.1", ()=>{
    console.log("listening to the port no 4000");
});