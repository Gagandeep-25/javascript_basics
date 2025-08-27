//window is a gloabal object created by the browzer 
window.console.log("Gagandeep");
console.dir(window.document.body.childNodes[0])
console.log(document.body)

//DOM Manuplation  : 

// accessing elements : 

// 1.can be done by slecting the id 
let id1 = document.getElementById("id1");
console.dir(id1);
console.log(id1);

// 2.can be done by using class name , this returns an HTML collection [array] 
let cls2 = document.getElementsByClassName("cls2");
console.dir(cls2);
console.log(cls2);

// 3.can be done by using tag name 
let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);

// 4.query selector (returns node-list) : the argument passed can be a id , class or a tag , it dosent matter but return only first element 
let first_ele = document.querySelector("div");
console.dir(first_ele);
console.log(first_ele);

// 5. query selector all : this is same as query selector but returns all elements 
let all_ele = document.querySelectorAll("div");
console.dir(all_ele);
console.log(all_ele);

//DOM manuplation properties (can get and update)

// 1. tagName : returns tag for element nodes
// 2. innertext : returns the text contenet of the element and all its children  
console.dir(document.body.firstChild);
console.dir(document.body.lastChild);
let p_tag = document.querySelector("p");
console.dir(p_tag);
