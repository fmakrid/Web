//This gives access to the element with id "product-name"
let productNameInputElement = document.getElementById("product-name");
//This gives access to the element with id "remaining-chars"
let remainingCharsElement = document.getElementById("remaining-chars");

//This is the fuction that will be executed when the event occurs, the "event" parameter is an object which gives us the value inside the event, in this case the "input"
function updateRemainingCharacters(event) {
  //Alternatively we can use productNameInputElement.value for the same result
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = 60 - enteredTextLength;

  //This updates the text of the span with "remaining-chars" id
  remainingCharsElement.textContent = remainingCharacters;
}

//This adds event listener to the input event of this element and executes the fuction pdateRemainingCharacters when the event occurs
productNameInputElement.addEventListener("input", updateRemainingCharacters);
