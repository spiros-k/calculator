

var num1 = 0;
var num2 = 0;

if (document.querySelector(".number")){ 
    document.querySelector(".number").addEventListener("click", function () {
    return num1 = document.querySelector(".number")});
}    



// document.querySelector(".number").addEventListener("click", function () {
//     return num1 = document.querySelector(".number");
// });
// document.querySelector(".number").addEventListener("click", function () {
//     return num2 = document.querySelector(".number");
// });

// if (document.querySelector("#equal").addEventListener("click", calculate)) {
//     document.querySelector("h3").classList.toggle("hidden");
// }

// <-- math symbols when clicked -->
document.querySelector("#plus").addEventListener("click", 
    function add (num1, num2) {
        return num1 + num2;
});

document.querySelector("#minus").addEventListener("click", 
    function sub (num1, num2) {
        return num1 - num2;
});

document.querySelector("#times").addEventListener("click", 
    function mult (num1, num2) {
        return num1 * num2;
});

document.querySelector("#divide").addEventListener("click", 
    function div (num1, num2) {
        return num1 / num2;
});

document.querySelector("#equal").addEventListener("click", 
    function calculate (num1, num2, operator) {
        return operator (num1, num2);
});