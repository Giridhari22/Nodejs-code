// we gonna create our own module and then we gonna export that module so that any file can access
const add = (a,b) =>{
    return a+b
;
};
const sub = (a,b) =>{
    return a-b
;
};
const mult = (a,b) =>{
    return a*b
;
};
const area = (a,b)=>{
    return 2*(a+b);
}

const name = "giridhari"; 

// if we export only one module at a time
// module.exports.add = add;
// now we export multiple module at a time module
module.exports = {add, sub, mult, name,area};