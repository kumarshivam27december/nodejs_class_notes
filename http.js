var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.write('welcome to index page');
    }
})


