// array that contains the different possible text to be displayed
const possibleDisplayText = [
  "How are you?",
  "I'm alright",
  "Wanna cup of hot choc?",
  "Yeah, let's go!",
];

//get button and displayText elements from the html
let button = document.getElementById("update-text");
let displayText = document.getElementById("display-text");

//set currentTextIndex to zero - the beginning of the array
let currentTextIndex = 0;

/**
 * Upon clicking the button, display next text of the array
 */
button.onclick = () => {
  // update index
  currentTextIndex = currentTextIndex + 1;
  if (currentTextIndex >= possibleDisplayText.length) {
    currentTextIndex = 0;
  }

  //update text
  displayText.innerHTML = possibleDisplayText[currentTextIndex];
};

//set display text to first element at beginning
button.displayText = possibleDisplayText[currentTextIndex];
