// Higher Order Functions are the functions which accept another function as a parameter
const A = function Area(r) {
    return Math.PI * r * r
}

const C = function Circumference(r) {
    return 2 * Math.PI * r
}

const D = function Diameter(r) {
    return 2 * r
}


const R = [2,3,4,5]

const parseArr = function (R, L) {
    let Ans = []
    for (let i = 0; i < R.length; i++) {
        Ans.push(L(R[i]))
    }
    return Ans
}

console.log(parseArr(R, A));
console.log(parseArr(R, C));
console.log(parseArr(R, D));