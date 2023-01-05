function O() {
    console.log("First level function");
    S()
    function S() {
        console.log("Nested functions");
    }
}

O()
