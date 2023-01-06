// setTimeout(function() {
//     // This callback function just runs after 2 sec 
//     // till then it is pushed on to the call stack
//     console.log("This is nothing but a callback function");
// }, 2000);


// document.getElementsByTagName('H1')[0].addEventListener('click', function () {
//     console.log("Heading is clicked");
// })
// console.log(document.getElementsByTagName('H1').textContent);


function Attach(TAG) {
    document.getElementsByTagName(`${TAG}`)[0].addEventListener("click", function () {
        console.log(`${TAG} Clicked`);
    })
}

Attach('button')
Attach('H1')