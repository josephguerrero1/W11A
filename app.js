// Created a firsth1 variable, the value is the h1 tag with an id="first_h1". 
let firsth1 = document.getElementById("first_h1");

// Created a function of hovered that prints to the console the eventDetails and changes the color of the id="first_h1" element to blue, once the mouse hovers over the element.
function hovered(eventDetails) {
    console.log(eventDetails);
    firsth1.style.color = "blue";
}

// Added a "mouseover" EventListener to the id="first_h1" element, it will trigger the function "hovered" when the mouse is hovered over the element.
firsth1.addEventListener("mouseover", hovered);

// Created a secondh1 variable, the value is the h1 tag with an id="second_h1". 
let secondh1 = document.getElementById("second_h1");

// Created a function of clicked that prints to the console the eventDetails and changes the color of the id="second_h1" element to red, once the mouse clicks the element.
function clicked(eventDetails) {
    console.log(eventDetails);
    secondh1.style.color = "red";
}

// Added a "click" EventListener to the id="second_h1" element, it will trigger the function "clicked" when the mouse clicks the element.
secondh1.addEventListener("click", clicked);

// Targeted the body of my document with an "onkeypress" event.
// If the sapcebar key is pressed, the function will execute.
// The function will print to the console the EventDetails and change the background color of the body to cyan only if the spacebar key is pressed.
document.body.onkeypress = function (e) {
    if (e.keyCode == 32) {
        console.log(e);
        document.body.style.background = "cyan";
    }
}