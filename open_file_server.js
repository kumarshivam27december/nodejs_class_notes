var http = require('http');
var fs =  require('fs');
http.createServer(function(req,res){
    //open a file on the server and return its content:
    fs.readFile('input.txt',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);