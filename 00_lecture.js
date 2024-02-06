// // v8 engine
// // event driven
// // node js = runtime environment + js library
// console.log("hello");
// console.log("hello world");
// console.error(new Error("Hell ! this is a wrong method"));
// const names = 'johny';
// console.warn(`Don't mess with me ${names}! Don't mess with me`);
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("X ");
    }
    console.log();
}
