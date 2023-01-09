const arr = [1, 2, 3, 4, 5, 6, 7, 8]

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