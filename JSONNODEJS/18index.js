// JSON  stands for javascript object Notation . 
// JSON is a lightweight. 
// format for storing and transporting data . 
// JSON is often used when data is sent from a server . 
const fs = require("fs");
const bioData = {
    name:"vinod",
    age: 26,
    channel : "Giridhari jha",
};

// // There are generally two types of method :- 
// // 1. Object to JSON 

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// // 2. JSON to Object
// const objData = JSON.parse(jsonData);
// console.log(objData);

// task:
// 1: convert to JSON 
const jsonData = JSON.stringify(bioData);
// 2:  dusre file me add karna hai 
// async type  1-file ka nam 2- kya data pass krna hai 3- err agr ho to
fs.writeFile("json1.json", jsonData, (err)=>{
console.log("done");
});
// 3: readfile - above api is created in json1.json file .. we have to read that api 
fs.readFile("json1.json", "utf-8",(err, data)=>{
// 4: again convert back to js obj orgional 
    const orgData = JSON.parse(data);
// 5: console.log
    console.log(data);
    console.log(orgData);
});
