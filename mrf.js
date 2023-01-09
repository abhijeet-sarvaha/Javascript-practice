// MRF CHALLENGE
users = [
    {name: "Abhijeet", lastname: "Mamidwar", age: 21},
    {name: "Elon", lastname: "Musk", age: 35},
    {name: "Ratan", lastname: "Tata", age: 70},
    {name: "Abc", lastname: "Xyz", age: 21}
]

// const ch1 = users.map((I) => {return `Welcome ${I['name']} ${I['lastname']}` })
// console.log(ch1);
// ch1.map((x) => console.log(x))

// const ch2 = users.filter(function (x) {
//     return x['age'] > 25
// })
// console.log(ch2);

// const ch3 = users.reduce(function (acc, curr) {
//     if (acc[`${curr['age']}`] === undefined)  {
//         acc[`${curr['age']}`] = 1
//         return acc
//     }
//     else{
//         acc[`${curr['age']}`] += 1
//         return acc
//     }
// }, {})


// console.log(ch3);


const ch4 = users.reduce(function (acc, curr) {
    if (!acc.includes(curr['name'])) {
        acc.push(curr['name'])
    }
    return acc
}, [])

console.log(ch4);

// const arr = [15, 2, 3, 4, 5, 6, 7, 8]

// // Map is to do operations on each item in an array
// const res1 = arr.map(function (x) {
//     return x * x
// })
// console.log(res1);

// // Filter is to filter out specific item satisfying the given criteria
// const res2 = arr.filter(function (x) {
//     return x < 8 && x % 2 == 0
// })
// console.log(res2);

// // Reduce is used to generally either get sum or store current required value in the programm
// const res3 = arr.reduce(function (acc, curr) {
//     return acc += curr
// }, 0)
// console.log(res3);


// // reduce function require two parameters first is the function and second one is initial value
// const res4 = arr.reduce(function (acc, curr) {
//     console.log(acc, curr);
//     return Math.max(acc, curr)
// }, 0)
