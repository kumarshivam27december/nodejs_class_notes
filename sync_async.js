var fs = require("fs");
//Asynchronours read
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("Ashynchronous read: "+read.toString());
});
//Synchrounous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: "+data.toString());
console.log("Program Ended");
