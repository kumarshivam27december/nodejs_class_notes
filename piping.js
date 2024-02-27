var fs = require("fs");
//create a readable stream
var reader = fs.createReadStream('test.txt');
//create a writable stream
var writer = fs.createWriteStream('newfile.txt');
// writer.on('pipe',()=>{
//     console.log('something is piping into the writer.');
// });
reader.pipe(writer);