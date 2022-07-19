let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");

let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button")

let text = "";

// generate text
const textGenerator = () => {

    let generatedText = "";

    // String.fromCharCode gives ASCII value - (crazy characters)
    // from a given number 

    for (let i = 0; i < 3; i++) {  
        // 65-90 numbers are capital letters
        generatedText += String.fromCharCode(randomNumber(65, 90));

        // 97-122 are samll letters
        generatedText += String.fromCharCode(randomNumber(97, 122));

        //48-57 are numbers from 0-9
        generatedText += String.fromCharCode(randomNumber(48, 57));

    }

    return generatedText;
}

// generaate random numbers between a giver range
const randomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

    // to test
    //
    // console.log(randomNumber(1, 10))
    // console.log(textGenerator()); 

    // canvas part
    function drawStringOnCanvas(string) {
        // getContext() - return the drawing context that 
        // has all the drawing properties and functions needed to draw on canvas

        let context = canvas.getContext("2d"); 
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
         
        // array of text color
        const textColors = ["rgb(0, 0, 0)", "rgb(130, 130, 130)"];

        // space between letters
        const letterSpace = 150 / string.length;

        // loop through string
        for (let i = 0; i < string.length; i++) {

            // define initial space on X axis
            const xInitialSpace = 25;

            // set font for canvas element
            context.font = "20px Roboto Mono";

            // set text color
            context.fillStyle = textColors[randomNumber(0, 1)];
            context.fillText(
                string[i], xInitialSpace + i * letterSpace, randomNumber(25, 40), 100
            );
        }
    }


// initial function
const triggerFunction = () => {
    // clear input
    userInput.value = "";
    text = textGenerator();
    console.log(text)

    // randomize the text so that everytime the position
    // of numbers and small letter is random

    text = [...text].sort(() => Math.random() - 0.5).join("");
    drawStringOnCanvas(text)

};
    
// call triggerFunction for reload button
reloadButton.addEventListener("click", triggerFunction);

// call triggerFunction when page
window.onload = () => triggerFunction();

submitButton.addEventListener("click", () => {
    // check if user input == generated text
    if (userInput.value === text) {
        alert("Success");
    }
    else {
        alert("Incorrect");
        triggerFunction();
    }
 })


