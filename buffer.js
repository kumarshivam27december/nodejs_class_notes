var buf = new Buffer(10);
var buf = new Buffer([10,20,30,40]);
var buf = new Buffer("simply easy learning","utf-8");


/*
//write buffer - concept

buf = new Buffer.alloc(256);
len = buf.write("simply easy learning");
console.log("octet written: "+len);


*/


/*
// read buffer

buf = new Buffer.alloc(26);
for(var i = 0;i<26;i++){
    buf[i] = i+97;
}
console.log(buf.toString('ascii')); //prints simply easy learning in ascii
console.log(buf.toString('ascii',0,5))//output abcde
console.log(buf.toString('utf-8',0,5)); //prints the same result as above because utf-8
console.log(buf.toString('undefined',0,5)); //prints the same result as above because utf-8



//alter


var buf = new Buffer('simply easy learning');
var json = buf.toJSON(buf);
console.log(json);

*/
