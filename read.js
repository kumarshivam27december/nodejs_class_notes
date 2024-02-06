var fs = require("fs");
//Asynchrnous - opening file
console.log("Going to oprn file!");
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }

    console.log("file opened successfully");
});