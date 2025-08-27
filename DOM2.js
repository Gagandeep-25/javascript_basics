console.log("Document object model");

//ATRIBUTES
//tag.getAttribute(attr) : returns the attribute value 
let div = document.querySelector("div");
console.dir(div);
console.log(div);
let cls2 = div.getAttribute("class");
console.log(cls2);
let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//tag.setAttribute(attr,value) : used to set attribute value 
let pa = document.querySelector("p");
console.log(pa.setAttribute("class","next"));
