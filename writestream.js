//writestream.js code
//This is the file that will handle writing to a stream of data in real-time.
var fs = require("fs");
var data = ("this is node.js class");
//create a writable stream
var writeStream = fs.createWriteStream('output.txt');
//write the data to stream with encoding to utf8
writeStream.write(data, 'utf8');
//mark the end of file
writeStream.end();
//handle stream event  --> finish , and error
writeStream.on('finish', function() {
    console.log("Writing finished!");
});
writer.on('error',function(err){
    console.error(err);
});