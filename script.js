

//Function declaration
function squared(number1, number2){

    let multiplication = (number1 * number1) + (number2 * number2);
    let sum = multiplication * multiplication;
    return sum;

}

anwser = squared(2, 1);
console.log(anwser);


//Fuction expression
let squared1 = function(number1, number2){

    let multiplication = (number1 * number1) + (number2 * number2);
    let sum = multiplication * multiplication;
    return sum;

};

anwser1 = squared1(2, 1);
console.log(anwser1);


//Arrow function
let squared2 = (number1, number2) => {

    let multiplication = (number1 * number1) + (number2 * number2);
    let sum = multiplication * multiplication;
    return sum;

};

anwser2 = squared2(2, 1);
console.log(anwser2);





