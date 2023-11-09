// array that contains the different possible text to be displayed
const POSSIBLE_DISPLAY_TEXT = [
  "How are you?",
  "I'm alright",
  "Wanna cup of hot choc?",
  "Yeah, let's go!",
];

//get button and displayText elements from the html
const button = document.getElementById("update-text");
const displayText = document.getElementById("display-text");

//set currentTextIndex to zero - the beginning of the array
let currentTextIndex = 0;

/**
 * Upon clicking the button, display next text of the array
 */
button.onclick = () => {
  // update index
  currentTextIndex = currentTextIndex + 1;
  if (currentTextIndex >= POSSIBLE_DISPLAY_TEXT.length) {
    currentTextIndex = 0;
  }

  //update text
  displayText.innerHTML = POSSIBLE_DISPLAY_TEXT[currentTextIndex];
};

//set display text to first element at beginning
button.displayText = POSSIBLE_DISPLAY_TEXT[currentTextIndex];
