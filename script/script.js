const symbols=[
    "AC","+/-","%","/",
    "9","8","7","*",
    "6","5","4","-",
    "3","2","1","+",
    "0",".","="
]
const topSymbols=[
    "AC","+/-","%"
]
const rightSymbols=[
    "+","-","*","/","="
]
a = 0; b = null; operator = null;
function clearAll(){
    a = 0;
    b = null;
    operator=null;
}

display = document.getElementById("display")

for (let i = 0; i<symbols.length; i++){
    let value = symbols[i];
    let button = document.createElement("button");
    button.innerText=value;
    if (value == "0"){
        button.style.width = "160px";
        button.style.gridColumn = "span 2";
    }
    if(rightSymbols.includes(value)){
        button.style.backgroundColor="orange";
        button.style.color="black";
    }
    if(topSymbols.includes(value)){
        button.style.backgroundColor="#D2D200";
        button.style.color="black";
    }

    button.addEventListener("click", function(){
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
                    clearAll();
                    display.value = "";
                    break;
                case "+/-":
                    display.value = Number(display.value) * (-1);
                    break;
                case "%":
                    display.value = Number(display.value)/100;
            }
        }else{
            if (value == "."){
                if (!display.value.includes(".") && display.value != ""){
                    display.value += value;
                }
            }else if (display.value == "0"){
                    display.value = value;
            }else{
                    display.value += value;
            }
        }
    })

    document.getElementById("buttons").appendChild(button);
}