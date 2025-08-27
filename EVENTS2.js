//create a toggle button that changes the screen to dark-mode when clicked and back to light mode when clicked again  
let modebtn = document.querySelector("#mode");
let curr_mode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
    if(curr_mode === "light"){
        curr_mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        curr_mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    } 
    console.log(curr_mode);
});
