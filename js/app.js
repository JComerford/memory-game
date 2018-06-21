/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Array with all cards in it.
let allTheCards = ["fa fa-diamond", "fa fa-diamond",
    "fa fa-paper-plane-o", "fa fa-paper-plane-o",
    "fa fa-anchor", "fa fa-anchor",
    "fa fa-bolt", "fa fa-bolt",
    "fa fa-cube", "fa fa-cube",
    "fa fa-leaf", "fa fa-leaf",
    "fa fa-bicycle", "fa fa-bicycle",
    "fa fa-bomb", "fa fa-bomb"]

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// set-up event listener for each card.
let card = document.querySelector('.card');
let cards = document.querySelectorAll('.card');
let deck = document.querySelector('.deck');

//let thingToBeClicked = cards.dispatchEvent(event);
deck.addEventListener('click', function(event) { 
    let thingToBeClicked = event.target; 
    if (thingToBeClicked.classList.contains('card')) {   
        flipCard(thingToBeClicked); //Call the function to flip cards while changing class to "card open show"
    } 
})

//Make cards flip, change class to "card open show".
function flipCard(thingToBeClicked) {  //pass in the event.target here.
    thingToBeClicked.classList.toggle('open'); //adds open to class of card...
    thingToBeClicked.classList.toggle('show'); //...along with show. End result should be: .card = "open card show"
}
    
//add the card to a *list* of "open" cards.
let openCards = [];




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
