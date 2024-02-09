var zlib = require('zlib');
var fs = require('fs');
var brot = zlib.createBrotliCompress();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(brot).pipe(w);