var fs = require("fs");
console.log("Going to get file info!");
fs.stat('input.txt',function(err,stats){
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file infor successfully!");

    //check file type

    console.log("isFile ? "+stats.isFile());
    console.log("isdirectry ? "+stats.isDirectory());
});