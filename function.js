
function sayMyName(){
    console.log("Z");
    console.log("Y");
    console.log("M");
    console.log("P");
    console.log("S");
    console.log("Y");
}
sayMyName()

function addTwoNumbers(number1, number2){  //function definition
   console.log(number1 + number2);
}

console.log(addTwoNumbers(3,4)); //difference between parameter and argument

function addTwoNumbers(number1, number2){
    // let result = null;
    let result = number1 + number2
    return result  //After return keyword compiler doesn't execute any statement. After return program flow goes to calling part.
    // console.log(result);
    // return number1 + number2
}


