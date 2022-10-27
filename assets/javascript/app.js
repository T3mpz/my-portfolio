// Help for setting up for loop and event listener
// https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist

// Event listener mouseenter & mouseleave
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event

// Help for adding class to a element
// https://www.w3schools.com/howto/howto_js_add_class.asp

// created a variable called cardEl that holds the value of my project-cards
const cardEl = document.querySelectorAll(".project-card");

// Using for loop to iterate over each card
//   intializing      condition    incrementer
for (let i = 0; i < cardEl.length; i++) {
  // Whatever cardEl index I hover on, I want to add an event listener to lisen for a hover mouse enter.
  // card index    eventListener on mouse hover    function(run this code) <-- for loop logic
  cardEl[i].addEventListener("mouseenter", function () {
    // I want to add a class to the cardEl being hovered
    // Have to include index to be able to track each cards index
    cardEl[i].classList.add("scale-up");
    // console.log(cardEl[i]);
    console.log(cardEl[i]);
  });

  // What ever cardEl index you hover on, I want to add an event listener to lisen for a hover mouse leave.
  // card index    eventListener on mouse hover    function(run this code)
  cardEl[i].addEventListener("mouseleave", function () {
    // I want to remove a class to the cardEl being hovered
    // Have to include index to be able to track each cards index
    cardEl[i].classList.remove("scale-up");
    // console.log(cardEl[i]);
  });
}

for (let i = 0; i < cardEl.length; i++) {}
