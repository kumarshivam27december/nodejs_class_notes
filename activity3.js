// assign a task to read a file,modify its content and save the changes .
// assign a task use buffers to read and write binary data from/to a file in javascript
/*------------------------------------------------------------------------------------------ */

/* task 1*/

// const fs = require('fs');

// // Step 1: Read the file
// const filePath1 = 'original_folder_nodejs/input.txt';

// fs.readFile(filePath1, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }

//     // Step 2: Modify the content (replace 'oldText' with 'newText', for example)
//     const modifiedData = data.replace(/oldText/g, 'newText');

//     // Step 3: Save the changes
//     fs.writeFile(filePath1, modifiedData, 'utf8', (err) => {
//         if (err) {
//             console.error('Error writing to the file:', err);
//             return;
//         }
//         console.log('File successfully modified and saved!');
//     });
// });

/*------------------------------------------------------------------------------------------ */
/*task2*/
const fs = require('fs');

// Step 1: Read the file using buffers
const filePath = 'C:/Users/91995/Desktop/Folders/nodejs/original_folder_nodejs/input.bin';

fs.readFile(filePath, (err, dataBuffer) => {
    if (err) {
        console.error('Error reading the binary file:', err);
        return;
    }

    // Step 2: Modify the binary data (if needed)

    // For example, let's reverse the order of bytes in the buffer
    const modifiedBuffer = Buffer.from(dataBuffer.reverse());

    // Step 3: Write the modified binary data back to the file
    fs.writeFile(filePath, modifiedBuffer, (err) => {
        if (err) {
            console.error('Error writing to the binary file:', err);
            return;
        }
        console.log('Binary file successfully modified and saved!');
    });
});
