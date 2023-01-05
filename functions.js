// NESTED functions

function O() {
    console.log("First level function");
    S()
    function S() {
        console.log("Nested functions");
    }
}

O()



// Normal functions
console.log(F === undefined);
console.log(A === undefined);


// Types of function declaration
function A(n) {
    var t = 20;
    console.log(t);
    return 20 * n
}


console.log(A(2));


var F = function (n) {
    console.log(n);
}

console.log(F);
console.log(A);



// Arrow functions
var Arr = (n) => {
    return n * n
}

console.log(Arr(5));


var temp = () => "Nice to meet you"

console.log(temp());