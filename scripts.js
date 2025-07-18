// importaciones del DOM
const buttonNumbers = document.querySelectorAll('.button_style');
const buttonOperators = document.querySelectorAll('.symbols');
const display = document.querySelector('.result');
let result;
previus_result = false;
let previusvalue;
//esta funcion se encarga de actuaizar el resultado en pantalla solo a los botone con numeros
function updateDisplay(value) {
    value = value.toString();
    previusvalue = display.innerHTML.charAt(0);
    if (previusvalue === "0" || previus_result === true) {
        result = display.innerHTML = `${value}`;
        previus_result = false;
    }
    else{
        // Verifica si el resultado tiene más de 12 caracteres
        //para evitar errores de styles
        if(result.length >= 12){
            buttonNumbers.disabled = true;
            buttonOperators.disabled = true;
            return;
        }
        else if (result.length < 10){
            buttonNumbers.disabled = false;
            buttonOperators.disabled = false;
        }
        result = display.innerHTML += `${value}`;
    }
    previusvalue += value;
}

//esta funcion se encarga de actuaizar el resultado en pantalla solo a los botone con operadores
//y tambien de manejar los errores de los operadores
// y el boton de "=" para el resultado final
function symbols(operator){
    if(display.innerHTML === ""){
        display.innerHTML = "";
    }
    let lastChar = display.innerHTML.slice(-1);
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
        if ("+-*/".includes(lastChar)) {
        // Reemplaza operador anterior
        display.innerHTML = display.innerHTML.slice(0, -1) + operator;
        } else if (lastChar !== "=") {
        // Agrega el operador
        display.innerHTML += operator;
        }
        previus_result = false;
        break;
                        case "C":
                            display.innerHTML = "0";
                            result = "";
                            break;
                            
                            case "=":
                                result = display.innerHTML;
                                if (result === "27/05/2008"){
                                    alert("Muchas gracias por ser unos de los pocos que se saben mi cumpleaños y ademas felicitarte por descubrir el easter egg,espero que disfrutes mis proyectos");
                                    window.open("https://www.youtube.com/@XavierX1355", "_blank");
                                }
                                if(result === "666"){
                                    window.open("https://www.youtube.com/@thejulcel3657","_blank")
                                }
                                result = eval(display.innerHTML);
                                display.innerHTML = result;
                                previus_result = true;
                                if (result === "" || result === undefined || result === null) {
                                    display.innerHTML = "0";
                                    previus_result = false;
                                    console.log("Invalid operation");
                                }
                                break;
                            }
                            previusvalue += operator;
                            previusOperator = previusvalue.charAt(1);
}