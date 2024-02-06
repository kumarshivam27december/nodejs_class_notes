const fs = require("fs");
let student = {
    name: "John Doe",
    Age: 21,
    address:"banglore"
}


let data  = JSON.stringify(student,null,2);
//let data = JSON.stringify(student,['car'],2);
fs.writeFile('student-3.json',data,(err)=>{
    if(err) throw err;
    console.log(" has been written to file.");
});