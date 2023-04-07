// operating system 
const os = require("os");

console.log(os.arch());
// hostname
console.log(os.hostname());
// platform
console.log(os.platform());
// temprory file
console.log(os.tmpdir());
// type
console.log(os.type());

// how much free space in my pc in gb
const freeMemory = os.freemem();
console.log(`${freeMemory /1024 /1024/ 1024}`);

// how much total memory are there in my pc
const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);