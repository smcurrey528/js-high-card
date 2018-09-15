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
  let player1Card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
  let player2Card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
}
//Annouce Cards Function
//ALERT player 1 what the value and suit is of the card/object
//ALERT player 2 what the value and suit is of the card/object
function announceCards() {
 alert(`Player 1 is showing the ${player1Card.value} of ${player1Card.suit}`);
 alert(`Player 2 is showing the ${player2Card.value} of ${player2Card.suit}`);
}

// Card to Rank Function
//EVALUATE player 1's card and make it into an integer (parseInt)
//EVALUATE player 2's card and make it into an integrer
//possibly need to add rank into the object keys?
function cardToRank() {

}
// Anounce the winner function
//IF player 1's card's rank is higher than P2
//THEN say 'Player 1 wins'
//ELSE IF player two has the higher rank
//THEN say 'Player 2 wins'
//ELSE say 'its a tie'
//END IFELSE
//END AnnouceWinner
function announceWinner() {
  if (player1Card[0] > playerCard2[0]) {
    alert("Player Number One has the high card and wins!")
  } else if (player2Card[0] > player1Card[0]) {
    alert('Player Number Two has the high card and wins!')
  } else  {
    alert('It\'s a tie!!');
  }
}


// Return the cards to deck function
//START returnCardstoDeck
//ADD player 1 card back to deck array
//ADD player 2 card back to deck array
//END returnCardstoDeck
function returnCardsToDeck() {
  deck.push(player1Card);
  deck.push(player2Card);
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
