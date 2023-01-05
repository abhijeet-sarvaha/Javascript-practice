var X = 10



function O() {
    var X = 5
    console.log(X);
    console.log("First level function");
    S()
    function S() {
        console.log();
        console.log("Nested functions");
    }
}

O()
