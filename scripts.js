const buttonNumbers = document.querySelectorAll('.button_style');
const buttonOperators = document.querySelectorAll('.symbols');
const display = document.querySelector('.result');
let result;
previus_result = false;
let previusvalue;
function updateDisplay(value) {
    value = value.toString();
    console.log(value);
    previusvalue = display.innerHTML.charAt(0);
    if (previusvalue === "0" || previus_result === true) {
        display.innerHTML = `${value}`;
        previus_result = false;
    }
    else{
        result = display.innerHTML += `${value}`;
    }
    previusvalue += value;
}

function symbols(operator){
    if(display.innerHTML === ""){
        display.innerHTML = "";
    }
    switch (operator) {
        case "+":
            result = display.innerHTML += `${operator}`
        break;
        case "-":
        result = display.innerHTML += `${operator}`
        break;
        case "*":
        result = display.innerHTML += `${operator}`
        break;
        case "/":
        result = display.innerHTML += `${operator}`
        break;
        case "C":
        display.innerHTML = "";
        result = 0;
        break;
        case "=":
            result = eval(display.innerHTML);
            display.innerHTML = result;
            previus_result = true;
            if (result === "" || result === undefined || result === null) {
                display.innerHTML = "0";
                previus_result = false;
                console.error("Invalid operation");
            }
            break;
        }
}