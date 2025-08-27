console.log("for-loop");
//for loop : used for piece of code to execute again and again
let n= 5;
let ph=("Gagan deep");
for(let i=1 ; i<=n ; i++){
    console.log(ph);
    console.log(i);
}

//calusulation os sum up to nth digit using for loop
let sum=0;
for(let i=0 ; i<=n ; i++){
    sum+=i;
}
console.log("sum =",sum);

console.log("while - loop");
//while loop 
let i=0;
let su=0;
while(i <= n){
    console.log("i=",i,"Gagan");
    su+=i;
    i++;//incrementation
}
console.log("sum = ",su);

console.log("do-while loop");
//do while loop (will execute atleate once irrespecrive of the condition)
do{
    console.log("i=",i,"nigga");
    i++
}while(i <= n);

console.log("For-of loop");
//for of loop(can opperate on arrays and strings )
//here j stores all the characters in string str 
let str="Gagandeep.L.S";
for(let j of str){
    console.log("j=",j);
}

//size of string using for of loop 
//this for of loop cannot be used for objects
let size=0;
for(let j in str){
    console.log("j=",j);
    size++;
}
console.log("size =",size); //13

console.log("for-in loop");
//for-in loop
//this is mainly used for objects 
const student = {                   //object known as student 
    name : "Gagandeep",
    age : 19,
    sgpa : 8.5,
    isPass : true
};
for(let key in student){
    console.log(" key= ",key," and value= ",student[key]);               //prints the keys and the value of keys
} //ke value pairs can be accesd using for-in loop
console.log("");

//PRACTICE QUESTIONS:
console.log("PRACTICE QUESTIONS: ");
console.log("");

//qn1: print all even numbers from 0 to 100
for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log(num);
    }
}

//qn2:create a game where you start with any random game number . ask the user to keep guessing the game number until a match
let gameNum = 25;
let userNum = prompt("Guess the number : ");
while(userNum != gameNum){
    userNum = prompt("Entered wrong number ! Guess the number  again : ");

}
console.log("congragulations ! coreect number");
