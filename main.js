// WHILE the player wants to keep playing is true keep playing game. Used same while loop from choose your own adventure hw

let replayOption = true
while ( replayOption == true ) {


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
function CardType (value, suit) {
  this.value = value,
  this.suit = suit
}
  for (i = 0; i < values.length; i++) {
    for (j= 0; i < suits.length; j++) {
      let card = new CardType (values[i], suits[j]);
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
//EVALUATE to check if integer (parseInt)
//IF value of card is a string for values then return rank. ie 'Queen' if then give rank for '12'
//IF already a number, return card value. can use parseInt to make sure it is a number
//possibly need to add rank into the object keys?
function cardToRank() {
  if (card.value === 'Jack') {
    return 11;
  } else if (card.value == 'Queen') {
    return 12;
  } else if (card.value === 'King') {
    return 13;
  } else if (card.value === 'Ace') {
    return 14;
  } else {
    return parseInt(card.value);
  }
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
  if (cardToRank(player1Card) > cardToRank(player2Card)) {
    alert("Player Number One has the high card and wins!");
  } else if (cardToRank(player2Card) > cardToRank(player1Card)) {
    alert('Player Number Two has the high card and wins!');
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

//CONFIRM if player want to play again
//IF yes then loop back
//ELSE then break the loop
let confirmOption = confirm("Do you want to play again?")
 if (confirmOption == true){
   replayOption == true;
  }
  else {
   replayOption == false;
      alert("Thanks for playing!")
   break;
  }
}




//Keep score of which player has the highest score. Use alert to show the highest score
