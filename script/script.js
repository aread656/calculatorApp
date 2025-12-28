const allSymbols = [
    "AC","+/-","%","/",
    "1","2","3","*",
    "4","5","6","-",
    "7","8","9","+",
    "0",".","="
]
const rightSymbols = [
    "=","+","-","*","/"
]
const topSymbols = [
    "AC","+/-","%"
]

//append numbers to A until an operator is inputted
//save operator, have input for B begin
let a = 0;
let operator = null;
let b = null;

function clearAll(){
    a = 0;
    operator = null;
    b = null;
}

const display = document.getElementById("display")

for(let i = 0; i < allSymbols.length; i++){
    let value = allSymbols[i];
    let button = document.createElement("button")
    button.innerText = value;

    if (value == "0"){
        button.style.width = "200px";
        button.style.gridColumn = "span 2"
    }

    if (rightSymbols.includes(value)){
        button.style.backgroundColor="Orange";
    }
    else if(topSymbols.includes(value)){
        button.style.backgroundColor="#d4d4d2aa"
        button.style.color = "#1C1C1C"
    }

    button.addEventListener("click", function() {
        if (rightSymbols.includes(value)){
            if (value == "="){
                if (a != null){
                    b = display.value;
                    let numA = Number(a);
                    let numB = Number(b);
                    switch (operator){
                        case "+":
                            display.value = numA + numB;
                            break;
                        case "-":
                            display.value = numA - numB;
                            break;
                        case "*":
                            display.value = numA * numB;
                            break;
                        case "/":
                            display.value = numA / numB;
                    }
                    clearAll();
                }
            }else{
                operator = value;
                a = display.value;
                display.value = "";
            }
        }else if (topSymbols.includes(value)){
            switch(value){
                case "AC":
                    clearAll();
                    display.value = "";
                    break;
                case "+/-":
                    display.value = Number(display.value)*(-1)
                    break;
                case "%":
                    display.value = Number(display.value)/100 
                    break;
                return
            }
        }else{
            if (value == "."){
                if (display.value != "" && !display.value.includes(value)){
                    display.value += value
                }
            }else if (display.value == "0"){
                display.value = value;
            }else{
                display.value += value;
            }
            
        }
    })

    document.getElementById("buttons").appendChild(button)
}