// Event Module
// Node.js has a built-in module , calles "Events",
// where you can create -, fire-, and listen for- your own events. 



// 1 create a class EventEmitters in which we require events module 
const EventEmitter = require("events");

// we store EventEmitters in new constant Event

const event  = new EventEmitter(); // now we can use it anywhere
// // Example-1 - Registering for the event to be fired only one time using once.

// // 2 if we want , nodejs do work on the basis of our event then
// event.on("SayMyName",()=>{
//     console.log("Your name is Giridhari");
// });

//  //1. always fire an event lower then the  the event we define for work

// event.emit("SayMyName");



// // Example-2 - create an event emitter instance and register a couple of callbacks.
// // in nodejs we can fire multiple function alert or anything with only on event
// event.on("SayMyName",()=>{
//     console.log("Your name is Giridhari");
// });

// event.on("SayMyName",()=>{
//     console.log("Your middlename is kumar");
// });
// event.on("SayMyName",()=>{
//     console.log("Your lastname is jha");
// });
//  //1. always fire an event lower then the  the event we define for work

// event.emit("SayMyName");

// Example-3 - Registering for the event with callback parameters
// now we can pass various parameter 


event.on("checkPage", (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200,"ok");