const arr = [15, 2, 3, 4, 5, 6, 7, 8]

// Map is to do operations on each item in an array
const res1 = arr.map(function (x) {
    return x * x
})
console.log(res1);

// Filter is to filter out specific item satisfying the given criteria
const res2 = arr.filter(function (x) {
    return x < 8 && x % 2 == 0
})
console.log(res2);

// Reduce is used to generally either get sum or store current required value in the programm
const res3 = arr.reduce(function (acc, curr) {
    return acc += curr
}, 0)
console.log(res3);


// reduce function require two parameters first is the function and second one is initial value
const res4 = arr.reduce(function (acc, curr) {
    console.log(acc, curr);
    return Math.max(acc, curr)
}, 0)
