console.log("EVENTS");

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};
let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("over div");
};


// EVENT OBJECT : 

btn1.onclick = (evt) => {
    console.log("Button was clicked ");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
box.onmouseover = (evt) => {
    console.log("over div");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};


// EVENT LISTNER : 

btn1.addEventListener("click", (evt) => {
    console.log("button-1 was clicked - Handeler 1");
    console.log(evt.type);
});

const handler2 = () =>{
    console.log("button-1 was clicked - Handler 2");
};
btn1.addEventListener("click",handler2);

btn1.addEventListener("click", () => {
    console.log("button-1 was clicked - handler 3");
});
 
// to remove 
btn1.removeEventListener("click" , handler2);
