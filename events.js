/*
let btn1 = document.querySelector('#btn1');

btn1.addEventListener("click",() =>
    {
        console.log("Button was clicked");
    } 
)

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Inside Div");
}
    */
/* creating a toggle button to change the screen to light mode and dark mode */
let currMode = "light";

let modebtn1 = document.querySelector("#mode");

modebtn1.addEventListener("click",()=>
{
    console.log("Trying to change mode");
    if (currMode === "light")
    {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
})