var fs = require("fs");
var data = '';
//create a readble stream
var reader = fs.createReadStream('input.txt');
 reader.setEncoding('utf8');  //read in utf-8 format
 reader.on("data", function(chunk) {   //event name is "data"
    console.log("Received chunk of size: ", chunk.length);
    data += chunk;               //append the new data to what we already have
});
