//Predefined variables
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;


//Build Deck Function
//Use a nest for loop to add cards and then suits to deck and make all cards in deck objects
function buildDeck() {
function cardType (value, suit) {
  this.value = value,
  this.suit = suit
}
  for (i = 0; i < values.length; i++) {
    for (j= 0; i < suits.length; i++) {
      let card = new cardType(values[i], suits[i]);
      deck.push(card);
    }
  }
}

// Deal Cards to Players Function
function dealCardsToPlayers() {

}

//Annouce Cards Function
function announceCards() {

}

// Card to Rank Function
function cardToRank() {
}
// Anounce the winner function
function announceWinner() {
//   if (player1Card[0] > playerCard2[0]) {
//     alert("Player Number One has the high card and wins!")
//   } else ('Player Number Two has the high card and wins!')
// }
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
