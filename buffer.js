/*
//create buffer
var buf = new Buffer(10);
var buf = new Buffer([10,20,30,40]);
var buf = new Buffer("simply easy learning","utf-8");

*/

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

/*

//concat buffer
var buffer1 = new Buffer.from('TutorialsPoint');
var buffer2 = new Buffer.from('simply easy learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer 3 content: "+buffer3.toString()); //TutorialsPointsimply easy learning


*/



/*
//compare  two buffers
var buffer1 = new Buffer.from('ABC');
var buffer2 = new Buffer.from('ABCD');
var result  = buffer1.compare(buffer2);
if(result<0){
    console.log(buffer1 + "comes before " + buffer2);
}else if(result === 0){
    console.log(buffer1 + "is equal to" + buffer2)
} else {
    console.log(buffer1 + " comes after " + buffer2);
}

*/

/*
    var buffer1 = new Buffer('ABC');
    //copy a buffer
    var buffer2 = new Buffer(3);
    buffer1.copy(buffer2);
    console.log("buffer2 content : "+buffer2.toString()) ;   
*/ 



/*
//buffer slicing
var buffer1 = new Buffer('Tutorialspoint');
//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: "+buffer2.toString());
*/