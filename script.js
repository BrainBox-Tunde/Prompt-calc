let num1 = prompt("Enter First value: ");
let num2 = prompt("Enter Second value: ");
let val1 = parseInt(num1);
let val2 = parseInt(num2);

let operator = prompt("Enter operation [ + , - , * , / ]");

if (operator == "+"){
    let sum = val1 + val2;
    alert (num1 + " + " + num2 + " = "+ sum );}
else if (operator == "-"){
    let sub = val1 - val2;
    alert (num1 + " - " + num2 + " = "+ sub );
}
else if (operator == "-"){
    let sub = val1 - val2;
    alert (num1 + " - " + num2 + " = "+ sub );
}
else if (operator == "*"){
    let mul = val1 * val2;
    alert (num1 + " * " + num2 + " = "+ mul );
}
else if (operator == "/"){
    let div = val1 / val2;
    alert (num1 + " / " + num2 + " = "+ div );
}
else {
    alert("Invalid Operation!!")
}
