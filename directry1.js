var fs = require("fs");
console.log("Going to create directory /temp/test");
fs.mkdir('C:/Users/91995/Desktop/Folders/nodejs/abc',function(err){
    if(err){
        return console.error(err);
    }
    console.log("directory created successfully!");
});
