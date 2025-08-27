console.log("String operations : ");
//tring is a sequenec of characters 
let str1 = "Gagandeep";

//.lenth returns the length of string 
let y = str1.length;
console.log(y);

//individual indices can also be accesed 
console.log(str1[0],str1[1],str1[2],str1[3],str1[4]);

let str2="JavaScript in easy";



//template string , aka string interpolation 
const pen = {
    name: "Parker pen",
    price: 200,
};
let opstr = `The cost of ${pen.name} \n is ${pen.price} rupees `;//use backtick `` only
console.log(opstr);
// the \n goes to next line and \t gives tab space 


//strings are immutable
//string methodogy , these donot alter the actual string but returens a new value 
str_a = "HELLO";
str_b = "hello";
str_c = "     Hello Java Scripts JS    ";
console.log(str_a,"\n",str_b);
// the str.toUpperCase() converts all letter to upper case
console.log(str_b.toUpperCase());
// the str.toLowerCase() converts all letter to lower case
console.log(str_a.toLowerCase());
// the str.trim() removes all white spaces at the starting and ending of the string
console.log(str_c.trim());
// the str.slice(start,end?) retuens a part of the string , ending value not included
console.log(str_a.slice(2,4));
// the str.concat(str2) joins two strings , can be done with even '+'
console.log(str_a.concat(" nigga"));
// the str.replace(searchVal,newVal) is used to search a vaule in a string or relace characters in a sring
console.log(str_a.replace("LO","P"));
// the str.charAt(indx) returns the character at the specifiesd index
console.log(str_a.charAt(4));


console.log("\n\n Practice Questions  : - \n");
//practice questions


//qn1: prompt the user to enter their full name, generate a username for them based on the input . Start with @ , followed by their full name and ending with fullname length
str_u = prompt("Enter your name :");
let uname = "@" + str_u + str_u.length;
console.log(uname);
