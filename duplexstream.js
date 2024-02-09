var fs = require("fs");
var data = "this is node js class";
//create a writable stream
var write = fs.createWriteStream("output.txt");
var reader = fs.createReadStream("test.txt");
//write the data to stream with encoding to the utf8
writer.write(data, "utf8");
//mark the end of file
writer.end();
//Handle stream event -->finish and error
writer.on("finish", function () {
  console.log("Writing completed.");
});
var data = "";

/*Blackbox



var fs = require("fs");
var data = "this is node js class";

// Create a writable stream
var writer = fs.createWriteStream('output.txt');

// Create a readable stream
var reader = fs.createReadStream('test.txt');

// Handle stream events
reader.on('data', function(chunk) {
    // Append the chunk to the data string
    data += chunk;
});

reader.on('end', function() {
    // Write the data to the writable stream
    writer.write(data, 'utf8');

    // Mark the end of the file
    writer.end();

    // Handle the finish event
    writer.on('finish', function() {
        console.log("Writing completed.");
    });
});

reader.on('error', function(err) {
    console.log('Error: ' + err.message);
});



*/
