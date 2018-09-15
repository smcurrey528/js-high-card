//Predefined variables
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

// Make all cards in deck objects
function cardType (values, suits) {
  this.values = values,
  this.suits = suits
}
const twoClubs = new cardType (2, 'Clubs');
const


//Build Deck Function
//Use a nest for loop to add cards
function buildDeck(arr) {
  for (i = 0; i < arr.length; i = 0) {

  }
}

// Deal Cards to Players Function
function dealCardsToPlayers() {
}

//Annouce Cards Function
function announceCards() {

}

// Card to Rank Function
function cardToRank(card) {
}
// Anounce the winner function
function announceWinner() {
  if (player1Card[0] > playerCard2[0]) {
    alert("Player Number One has the high card and wins!")
  } else ('Player Number Two has the high card and wins!')
}
// Return the cards to deck function
function returnCardsToDeck() {
}

//Invoking the functions above
function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck();
playGame();

//Keep playing with the while loop
//Keep score of which player has the highest score. Use alert to show the highest score
