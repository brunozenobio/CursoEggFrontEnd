console.log("==========MENU==========");
let num1  = prompt("Numero 1")
let num2= prompt ("numero 2");
let op =prompt(`        SUMA:  S o s
                RESTA: R o r
                Mult : M o m
                Div  : D o d`).toUpperCase();

switch (op) {
    case "S":
        console.log(num1+ num2)
        break;
    case "R":
        console.log(num1-num2)
        break;
    case "M":
        console.log(num1*num2)
        break;


}



