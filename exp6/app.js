const http=require("http");
const os=require("os");
const path=require("path");
const eventEmitter=require("events");

console.log("platform:",os.platform());
console.log("free memory",os.freemem());

console.log("File name:",path.basename(__filename));

const event=new eventEmitter();
event.on("welcome",()=>console.log("Welocme Event Triggered!"));

const server=http.createServer((req,res)=>{
    event.emit("Welcome");
    res.end("Hello! Welcome to Node.js Server");
});

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});

