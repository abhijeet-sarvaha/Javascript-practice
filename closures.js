// Functions which maintain their execution context are closures
function X() {
    let A = 10
    function T() {
        const P = 20;
        console.log(A, P);
    }
    T()
    function Y() {
        console.log(A, P);
    }
    Y()
}

const P = 100
X()