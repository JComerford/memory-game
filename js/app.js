/*
 * Create a list that holds all of your cards--From Mike Wales Project 2 Webinar: https://www.youtube.com/watch?v=_rUH-sEs68Y
 */
let cards = ['fa-diamond', 'fa-diamond',
             'fa-paper-plane-o', 'fa-paper-plane-o',
             'fa-anchor', 'fa-anchor',
             'fa-bolt', 'fa-bolt',
             'fa-cube', 'fa-cube',
             'fa-leaf', 'fa-leaf',
             'fa-bicycle', 'fa-bicycle',
             'fa-bomb', 'fa-bomb',
            ];

function generateCard(card) {
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}



//set stars for each game and how the user fared while playing
/* TO DO -- Finish stars after timer
let theStars = [];

function competition(theStars) {
    let scorePanel = document.querySelector('.score-panel');
    if (initGame()) {
        theStars == [];
    } if else ()
}
*/

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

//set-up a game -- From Mike Wales Project 2 Webinar: https://www.youtube.com/watch?v=_rUH-sEs68Y
function initGame() {
    let deck = document.querySelector('.deck');
    let cardHTML = shuffle(cards).map(function(card) {
        return generateCard(card);

    })
    
    deck.innerHTML = cardHTML.join('');
}
initGame();

//add event listener to each card in deck
//add class.open.show when card is clicked -- From Mike Wales Project 2 Webinar: https://www.youtube.com/watch?v=_rUH-sEs68Y
let allCards = document.querySelectorAll('.card');
let openCards = [];

allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {

        if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'))
        openCards.push(card);
        card.classList.add('open', 'show');
        console.log('open cards:', openCards.length);


        //check if cards match --From Mike Wales Project 2 Webinar: https://www.youtube.com/watch?v=_rUH-sEs68Y
        let firstCardType = openCards[0].dataset.card;
        console.log(firstCardType);

        //if cards don't match, remove from array -- Some from me, some from Mike Wales Project 2 Webinar: https://www.youtube.com/watch?v=_rUH-sEs68Y
        if (openCards.length == 2) {
            if (openCards[0].dataset.card == openCards[1].dataset.card) {
                console.log('This is a match!');
                openCards[0].classList.add('match');
                openCards[0].classList.remove('open', 'show');
                openCards[1].classList.add('match');
                openCards[1].classList.remove('open', 'show');
                openCards = [];
            } else {
                //if cards do not match, hide -- From Mike Wales Project 2 Webinar: https://www.youtube.com/watch?v=_rUH-sEs68Y
                setTimeout(function () {
                    openCards.forEach(function (card) {
                        card.classList.remove('open', 'show');
                    })
                    openCards = [];
                }, 1000)
            }
            
            
            
        } 

        
    })
})


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
