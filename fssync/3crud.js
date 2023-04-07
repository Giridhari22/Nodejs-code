// CRUD = CREATE READ UPDATE DELETE
const fs = require("fs");
// CHALLENGE TYM 
// 1: create a folder named is Thapa
// in sync version we can create a folder by only using
// fs.mkdirSync("thapa");



// 2: create a file in it named bio.txt and data into it .
fs.writeFileSync('thapa/bio.txt','welcome to the new file ');
// 3: Add more data into the file at the end of the existing data. 

fs.appendFileSync('thapa/bio.txt','  i have order to append some new data in this file');
// 4: read the data without getting the buffer data at first.
const buf_data = fs.readFileSync('thapa/bio.txt');

org_data = buf_data.toString();
console.log(org_data);
// 5: Rename the file name to mybio.txt
fs.renameSync("thapa/bio.txt","thapa/mybio.txt");
// 6: now delete both the file and the folder 
fs.unlinkSync("thapa/mybio.txt"); 
fs.rmdirSync('thapa');
