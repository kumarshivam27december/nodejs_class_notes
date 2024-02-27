/*Assign a task: parse a JSON filee,modify its content and save the changes
Assign a task: compress a file decompose it and compare the size*/

//code 1
const fs = require('fs');

// Step 1: Read the JSON file
fs.readFile('input.json', 'utf8', (err, data) => {
  if (err) throw err;

  // Step 2: Parse the JSON data
  const jsonData = JSON.parse(data);

  // Step 3: Modify the content
  // For example, let's assume we want to update a specific value in the JSON data
  jsonData.key_to_modify = 'new_value';

  // Step 4: Save the changes
  fs.writeFile('output.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) throw err;
    console.log('Changes saved to output.json');
  });
});




//code 2

const fs = require('fs');
const zlib = require('zlib');

// Compress the file
const readStream = fs.createReadStream('file_to_compress');
const writeStream = fs.createWriteStream('compressed_file.gz');
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
  // Decompress the file
  const compressedData = fs.createReadStream('compressed_file.gz');
  const decompress = zlib.createGunzip();
  const writeStreamDecompressed = fs.createWriteStream('decompressed_file');

  compressedData.pipe(decompress).pipe(writeStreamDecompressed);

  writeStreamDecompressed.on('finish', () => {
    // Compare the file sizes
    const originalSize = fs.statSync('file_to_compress').size;
    const decompressedSize = fs.statSync('decompressed_file').size;

    console.log(`Original file size: ${originalSize} bytes`);
    console.log(`Decompressed file size: ${decompressedSize} bytes`);
  });
});


