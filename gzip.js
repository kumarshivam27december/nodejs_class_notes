var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.createGzip();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(gzip).pipe(w);


//to unzip again
//const zlib = require('zlib');
//const unzip = zlib.createUnzip();
//const fs = require('fs');
//const inp = fs.createReadstream('test.txt.gz');
//const out = fs.createWriteStream('test.txt');

//inp.pipe(unzip).pipe(out)

