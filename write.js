const fs = require('fs');
 
let data = "This is a file containing a collection of books.";
 
fs.writeFile("books.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});


/*
const fs = require('fs');

fs.writeFile('demo.txt', 'hello Ayush' ,(err)=> {
  if(err){
    console.log('error',err);
  }
  console.log('DONE');
})

fs.readFile('demo.txt' ,(err,data)=> {
  if(err){
    console.log('error',err);
  }
  console.log(data.toString());
})

*/


