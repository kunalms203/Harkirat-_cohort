// function kunalAsync() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve('Kunal');
//         }, 2000);
//     })
// };



// const call = (data) => {
//     console.log(data);
// };


// kunalAsync().then(call);

// console.log("what are you doing")

// Promise and then MEthod


// function harkiratPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Harkirat');
//         }, 1000);
//     })
// };

// harkiratPromise().then(printName).catch((err) => {
//     console.error("Error: ", err);
// })

// function printName(data) {
//     console.log(data);
// }

// console.log("What are you doing?")

// Async Await method

function HRPromise(){
    return new Promise((resolve, reject)=>{
    setTimeout(() => {resolve("harkirat")}, 1000)});
}

async function main(){
    let a = await HRPromise();
    console.log(a);
    console.log('Are you sure you want to do this ');
    
}

main();
console.log("WhT re you doing?")

// Callback Exampole

let square = (a)=>{
    return a*a
}

let cube = (a)=>{
    return a*a*a    
}

let calculate = (a, callback)=>{
    return callback(a)
}

console.log(calculate(5, cube));