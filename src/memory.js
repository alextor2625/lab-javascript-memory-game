class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }

  shuffleCards() {
    if(!this.cards){
      return undefined;
    }
    this.cards.sort((a,b) => 0.5 - Math.random());
}



  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if(card1 === card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === this.cards.length/2){return true;}
    return false;

  }
}
 