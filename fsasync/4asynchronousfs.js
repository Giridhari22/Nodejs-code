// in asynchronous system there can be multiple request taken by the user or system at one Time
const fs = require("fs");
const { isTypedArray } = require("util/types");

// write new file

fs.writeFile("read.txt", "today is awesome day :)",(err)=>{
    console.log("files is created");
    console.log(err);
});

// we pass them a function as an argument - a callback-
// that gets called when a that task completes.
// The callback has an argument that tells u whether the operation 
// completed successfully.
// Now we need to say what to do when  fs.writeFile
// has completed (even if it's nothing), and start 
// checking for errors.


// how to add data in async version
fs.appendFile("read.txt"," plz like and share and subs my chhanel",(err)=>{
    console.log("task completed");
});

// if we have to read the file without getting buffer data then we have to use "UTF-8" in async data
fs.readFile('read.txt','UTF-8' , (err, data)=>{
    console.log(data);
});