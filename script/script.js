//declare symbols
//connect symbols to buttons
//add listeners to each button

const symbols = [
    "AC","+/-","%","/",
    "9","8","7","*",
    "6","5","4","-",
    "3","2","1","+",
    "0",".","="
]
const topSymbols = [
    "AC","+/-","%"
]
const rightSymbols = [
    "+","-","*","/","="
]

let a = 0;
let b = null;
let operator = null;

const display = document.getElementById("display");

for (let i = 0; i < symbols.length; i++){
    let value = symbols[i];
    let button = document.createElement("button");
    button.innerText = value;
    
    if (value == "0"){
        button.style.width = "200px";
        button.style.gridColumn = "span 2";
    }

    if (rightSymbols.includes(value)){
        button.style.backgroundColor = "orange"
    }
    if (topSymbols.includes(value)){
        button.style.backgroundColor = "#D2D250"
    }

    button.addEventListener("click",function(){
        if (rightSymbols.includes(value)){
            if (value == "="){
                if (a != null){
                    b = display.value;
                    let numA = Number(a);
                    let numB = Number(b);
                    switch(operator){
                        case "+":
                            display.value = numA + numB;
                            break;
                        case "-":
                            display.value = numA - numB;
                            break;
                        case "*":
                            display.value = numA*numB;
                            break;
                        case "/":
                            display.value = numA/numB;
                            break;
                    }
                }
            }else{
                operator = value;
                a = display.value;
                display.value = "";                
            }
        }else if(topSymbols.includes(value)){
            switch(value){
                case "AC":
                    a = 0;b = 0;operator = null;
                    display.value = "";
                    break;
                case "+/-":
                    display.value = Number(display.value) * -1;
                    break;
                case "%":
                    display.value = Number(display.value) / 100;
                    break;
            }
        }else{
            if(value == "."){
                if (display.value != "" && !display.value.includes(".")){
                    display.value += value;
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