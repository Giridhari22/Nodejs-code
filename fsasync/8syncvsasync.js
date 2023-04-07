// there is a difference between sync programming and async programming
// 1. In  sync programming we only have to work on code at one time ..system or code will execute
// one code at a tym
//       whereas 
// in Async programming we can work on mjultiple code and code will execute in a proper manner in which the result will execute 
// in that way "if result of last code will execute first then it will display rather then first one"


// in Async programming we have to write a call back function in which we have to pass two argument (err,resp )
// in sync programming we dont have to use call back func

// 1.Sync 
// const fs = require("fs");
// const data = fs.readFileSync('read.txt','utf-8',);
// console.log(data);
// console.log("after the data");

// here in the above code the last code should be printed because it takes less tym to execute
// but in async , the first code will execute first no matter whether it will takes more then time 

// 2.Async
const fs =  require("fs");
const data = fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log("after the data");

// here in above code the last code is printed first because in async will 
// execute that program which will take less tym whether it is last or first