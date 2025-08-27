
//if,if-else,if-else-lader
let marks = 99;

if(marks < 32){
    console.log("F grade ");
} else if(marks <= 40){
    console.log("D grade");
} else if(marks <= 50){
    console.log("C grade");
} else if(marks <= 75){
    console.log("B grade");
} else if(marks <= 88){
    console.log("A grade");
} else if(marks <= 95){
    console.log("A+ grade");
} else if(marks <= 100){
    console.log("O grade ");
} else {
    console.log(" tf is that ");
}

//ternery opperator
let age=19;
let result = (age >= 18 ? "adult" : "not an adult" );
console.log(result);

//switch statement
let a=10;
let b=20;
let opp='%';
let c;

switch (opp){
    case '+':
        c=a+b;
        console.log("a+b=",c);
        break;
    case '-':
        c=a-b;
        console.log("a-b=",c);
        break;
    case '*':
        c=a*b;
        console.log("a*b=",c);
        break;
    case '/':
        c=a/b;
        console.log("a/b=",c);
        break;
    case '%':
        c=a%b;
        console.log("a%b=",c);
        break;
    case '^':
        c=a**b;
        console.log("a^b=",c)
        break;
    default :
        console.log("invalid opp !");        

}

//alert : one time message to display to user
alert("Hello Nigga !");

//prompt : this is similar to alert but can also take input from user
let name = prompt("Enter your name :");
console.log(name);

//practice qn 1: take iput from user to check if a the didgit is divisible by 5 or not
let num = prompt("Enter a number :");
if(num % 5 === 0){
    console.log(num," is a multiple of 5");
} else {
    console.log(num," ain't a multiple of 5");
}

//practice qn 2: take input from user of score and determine their grade 
let score = prompt("Enter the score out of 100 : ");
if((score >= 90) && (score <= 100)){
    console.log("A grade");
} else if((score >= 70) && (score <= 89)){
    console.log("B grade");
} else if((score >= 60) && (score <= 69)){
    console.log("C grade");
} else if((score >= 50) && (score <= 59)){
    console.log("D grade");
} else if((score >= 0) && (score <= 49)){
    console.log("F grade");
} else {
    console.log("Invalid score !");
    alert("Invalid score !");
}
