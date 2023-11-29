
var num1 = 0;
var num2 = 0;
var arr = [];

//  <-- select first number --> 

$("button").on("click", (event) => {
    var a = event.target.id;
    switch(a){
        case "numberone":
            num1 = $("#numberone").text();
            $(".firstNumber").html(num1);
            secondNum();
            break;
        case "numbertwo":
            num1 = $("#numbertwo").text();
            $(".firstNumber").html(num1);
            break;
        case "numberthree":
            num1 = $("#numberthree").text();
            $(".firstNumber").html(num1);
            break;
        case "numberfour":
            num1 = $("#numberfour").text();
            $(".firstNumber").html(num1);
            break;
        case "numberfive":
            num1 = $("#numberfive").text();
            $(".firstNumber").html(num1);
            break;
        case "numbersix":
            num1 = $("#numbersix").text();
            $(".firstNumber").html(num1);
            break;
        case "numberseven":
            num1 = $("#numberseven").text();
            $(".firstNumber").html(num1);
            break;
        case "numbereight":
            num1 = $("#numbereight").text();
            $(".firstNumber").html(num1);
            break;
        case "numbernine":
            num1 = $("#numbernine").text();
            $(".firstNumber").html(num1);
            break;
        case "numberzero":
            num1 = $("#numberzero").text();
            $(".firstNumber").html(num1);
            break;
    }
});

//  <-- select operator -->

$("button").on("click", (event) => {
    var name = event.target.id;
    switch(name) {
        case "plus":
            $(".calculation").html("+");
            break;
        case "minus":
            $(".calculation").html("-");
            break;
        case "times":
            $(".calculation").html("*");
            break;
        case "divide":
            $(".calculation").html("/");
            break;
    }
})

//  <-- select second number -->

function secondNum() {
    $(".number").on("click", () => {
        var e = this.button;
        switch(e){
            case "number-one":
                num2 = $(".number-one").text();
                $(".secondNumber").html(num2);
                break;
            case "numbertwo":
                num2 = $("#numbertwo").text();
                $(".secondNumber").html(num2);
                break;
            case "numberthree":
                num2 = $("#numberthree").text();
                $(".secondNumber").html(num2);
                break;
            case "numberfour":
                num = $("#numberfour").text();
                $(".secondNumber").html(num2);
                break;
            case "numberfive":
                num2 = $("#numberfive").text();
                $(".secondNumber").html(num2);
                break;
            case "numbersix":
                num2 = $("#numbersix").text();
                $(".secondNumber").html(num2);
                break;
            case "numberseven":
                num2 = $("#numberseven").text();
                $(".secondNumber").html(num2);
                break;
            case "numbereight":
                num2 = $("#numbereight").text();
                $(".secondNumber").html(num2);
                break;
            case "numbernine":
                num2 = $("#numbernine").text();
                $(".secondNumber").html(num2);
                break;
            case "numberzero":
                num2 = $("#numberzero").text();
                $(".secondNumber").html(num2);
                break;
        }
    });
}

//  <-- equal button  -->

$("button").on("click", (event) => {
    var e = event.target.id;
    switch(e) {
        case "equal":
            $(".result").html("=");
            break;
    }
});

//  <-- math symbol functions -->

function add (num1, num2) {
    return num1 + num2;     
}

function sub (num1, num2) {
    return num1 - num2;
}

function mult (num1, num2) {
    return num1 * num2;
}

function div (num1, num2) {
    return num1 / num2;
}

function calculate (num1, num2, operator) {
    return operator (num1, num2);
}