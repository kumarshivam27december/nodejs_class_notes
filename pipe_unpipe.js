var fs = require("fs");
//create a readable stream
var reader = fs.createReadStream('test.txt');
//create a writable stream
var writer = fs.createWriteStream('newfile.txt');
writer.on('unpipe',()=>{
    console.log('unpiping occured');
});
// reader.pipe(writer);
reader.unpipe(writer);