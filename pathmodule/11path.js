const path = require("path");

// in order to find the dir name of any module we have to pass full path
console.log(path.dirname("C:/Users/Hp/OneDrive/Desktop/nodejs/pathmodule/11path.js"));
// in tjhis we get only the name of extension
console.log(path.extname("C:/Users/Hp/OneDrive/Desktop/nodejs/pathmodule/11path.js"));
// in this we get the name of the file 
console.log(path.basename("C:/Users/Hp/OneDrive/Desktop/nodejs/pathmodule/11path.js"));

// in this we get all name like dir, ext, base , root means all info in parse method
console.log(path.parse("C:/Users/Hp/OneDrive/Desktop/nodejs/pathmodule/11path.js"));

