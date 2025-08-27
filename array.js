console.log(("arrays\n\n").toUpperCase());
//arrays is collection of linear items , arrays in js can store elements of various datatypes
let marks = [99,37,34,86,88,73,32];
console.log(marks);
console.log(typeof(marks));
console.log(marks.length); //array property 
// individual elements of an array can be accesed througn their respective ideices
// arrays are mutable unlike strings
marks[2]=54;
console.log(marks);

//looping over arrays usinf for loop
for(let i=0;i<(marks.length);i++){
    console.log(marks[i]);
}

//usinf for of loop
let cities = ["banglore","delhi","mumbai","hydrabad"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//practice questions :
//qn1 : for a given array with marks of students -> [85,97,44,37,76,60], find average marks of the class
let mark = [85,97,44,37,76,60];
let sum=0;
for(let i of mark){
    sum+=i;
}
let avg=sum/(mark.length);
console.log(`Average = ${avg}`);

/*qn2 : for a given array with prices of 5 items : [250,645,300,900,50], all items have an offer of 10% off . change the array
to store final price after applying offers */
items = [250,645,300,900,50];
for(let i of items){
    console.log(`value before offer = ${i}`);
    i=i*0.9;
    console.log(`value after offer = ${i}`);
}
//or
for(let i=0;i<items.length;i++){
    let offer = items[i] / 10 ;
    items[i] -=offer;
}
console.log(items);

// array methods 
let veg = ["patato","carrot"];
let num = [1,3,5,7];
let mix = [25,69,"nigga"];
let arr_new = ["a","b","c","d","e","f","g"];
console.log("\n array methods \n\n");
// push() : adds an element to the rear end
veg.push("brocolie","beetroot");
console.log(veg); 
// pop() : delets from end and returns the deleted item
let del_veg = veg.pop();
console.log("deleted item = ",del_veg);
console.log(veg);
// toString(): Converts the elements of a given array to a string 
console.log(num.toString());
// concat() : can join multiple strings into a new defined string 
let new_mix = veg.concat(num,mix);
console.log("new array = ",new_mix);
// unshift(): adds an elements to the start , opposite of push 
num.unshift(-2,-1,0);
console.log(num);
// shift(): similar to pop but deletes an element from starting and returns it 
let del_num = num.shift();
console.log(del_num);
console.log(num);
// slice() : this returns the specified part of an array but dosnt alter the actual string  
let new_arr_new = arr_new.slice(1,3);
console.log(new_arr_new);
// splice() : this is similar to slice but alter the actyak array , it takes three parameters : splice(start_index,del_count,new_element);
arr_new.splice(1,3,"x","y");
console.log(arr_new);


//practice questions
console.log("\n practice Questions : \n\n");

/* qn 1 : create an array to store companies : "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
   a.Remove the first compant from array 
   b.remove Uber and ola in its place 
   c.add amazon at the end  */
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
companies.splice(1,3,"Amazon");
for(let i=0;i<3;i++){
    console.log(companies[i]);
} 
