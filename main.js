//Predefined variables
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];

//Build Deck Function
//Use a nest for loop to add cards and then suits to deck and make all cards in deck objects
//START buildDeck function
//CREATE constructor function to hold the deck card types
//RUN a for loop to iterate over values
//Nest another for loop to iterate over suits
//SET a new object to equal a new card with value and suit
//ADD the card into the empty deck array
//END buildDeck
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
//CREATE two random cards (probably use math.random for random and math.floor to make an integer)
//Reminder there are 52 cards in a deck for random number
//REMOVE random cards from deck. Reminder to set index and how many from deck
// SET two random cards to player 1 and player2
// END dealCardstoPlayers
function dealCardsToPlayers() {
  let player1Card = deck.splice(math.floor(math.random() * 52) + 1)[0,1];
  let player2Card = deck.splice(math.floor(math.random() * 52) + 1)[0,1];

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
