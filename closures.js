// // Functions which maintain their execution context are closures


function showTime() {
    let dateTime= new Date();
    let time = dateTime.toLocaleString();
    console.log(time)
}
setTimeout(showTime, 3000);

// for (let i = 1; i < 10; i++) {
//     function N(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000)
//     }
//     N(i)  
// }



// var x = 1
// for (let i = 1; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000)
// }





// function X() {
//     let A = 10
//     function T() {
//         const P = 20;
//         console.log(A, P);
//     }
//     T()
//     function Y() {
//         console.log(A, P);
//     }
//     Y()
// }

// const P = 100
// X()