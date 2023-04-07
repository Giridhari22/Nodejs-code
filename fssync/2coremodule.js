

// consider modules to be the same as javascript libraries . a set of functions you want to include in your application. 

// Node.js has a set of built-in modules which you can use without any further installation
// core module is like .. we have to know about File System 
// we will play with the file sysytem 

const fs = require("fs");

// if we wanna create a new file

fs.writeFileSync("padhlo.txt","Welcome to my world");
//  if we again write something new in same file the WriteFileSync method overwrite the previous line
fs.writeFileSync("padhlo.txt","Giridhari jha,Welcome to my world");

// if we want to write some more in the file then we use ".append" method
fs.appendFileSync("padhlo.txt"," how are you and what is your name Mr");

// node.js includes an additional data type called buffer
// (not availble in browswer's javascript)
// Buffer is mainly used to store binary data.
// while reading from  a file or receiving packets over the network.

// const buf_data = fs.readFileSync("padhlo.txt");
// console.log(buf_data);

// the result is
// <Buffer 47 69 72 69 64 68 61 72 69 20 6a 68 61 2c 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 77 6f 72 6c 64 20 68 6f 77 20 61 72 65 20 79 6f 75 20 61 6e 64 20 ... 20 more bytes>


// now we can find origional data from buffer data
const buf_data = fs.readFileSync('padhlo.txt');

org_data = buf_data.toString();
console.log(org_data);

// if we have torename the file 
fs.renameSync("padhlo.txt","pdholikho.txt");