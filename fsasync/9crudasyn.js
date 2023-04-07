// challenge tym
// 1: create a folder named it thapa 
const fs = require("fs");
// fs.mkdir("CRUD",(err)=>
// {
//     console.log("Folder created");
// });
// 2: create a file in it named as Bio.txt and data into it 
fs.writeFile("CRUD/Bio.txt","hey , this is the new file for us",(err)=>{
   console.log("hehe, i know file is created");
});
// 3: add more data into the file at the end of the existing data .
fs.appendFile("CRUD/Bio.txt","  hey , i don't want to write something new",(err)=>{
   console.log("  hehe, i know some data is added");
}); 
// 4: Read the data without getting buffer data at the first . 
fs.readFile("CRUD/Bio.txt","utf-8",(err)=>{
   console.log("i can read this file without buffer");
});
// 5: Rename the file to mybio.txt 
fs.rename("CRUD/Bio.txt","CRUD/myBio.txt",(err)=>{
   console.log("i can rename this file ");
});
// // 6: now delete both the file and the folder . 
// fs.unlink("./CRUD/Bio.txt", (err)=>{
//   console.log("Sorry, i have to delete this file!");
// });

fs.rmdir("CRUD", (err) => {
  console.log("Sorry, i have to delete this folder!");
});